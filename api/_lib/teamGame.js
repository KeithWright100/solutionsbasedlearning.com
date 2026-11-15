// api/_lib/teamGame.js
// Team games ("Guess the Place"): a teacher hosts on the board, teams
// join with a QR code and a team name, and answer clues against the
// clock. Reached through /api/session?teamGame=... (the Vercel Hobby
// plan is at its 12-function limit, so this has no file of its own).
//
// No student names or accounts are stored: teams only give a team name.
// Answers are checked here on the server, and a round's answer is only
// sent to the browsers once the teacher reveals it.
//
// Each round: a READY_SECS "get ready" countdown (the photo loads on every
// device while it runs), then the photo, then clue 2, STAGE_SECS each.
// Clue 3 only appears if no team got it right on the photo or clue 2.
// Scoring:
//   photo, first try:   10 + 1 bonus point for every second left of the
//                       first 10 (e.g. right in 4 seconds = 10 + 6 = 16)
//   photo, after a wrong try: 5
//   clue 2: 5 (open to every team still guessing, no speed points)
//   clue 3: 3
//   up to MAX_ATTEMPTS tries per round.
// Needs sql/014_team_games.sql.

import { randomBytes } from 'node:crypto';
import { getSupabaseAdmin } from './supabaseAdmin.js';
import { getSessionUser } from './auth.js';

const STAGE_SECS = 20;
const BONUS_SECS = 10;
const READY_SECS = 4;
const PHOTO_POINTS = 10;
const RETRY_POINTS = 5;
const CLUE_POINTS = [null, 5, 3]; // clue 2, clue 3
const MAX_ATTEMPTS = 3;
const MAX_TEAMS = 30;

const photo = (file, credit) => ({ url: 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(file) + '?width=1280', credit });

// Question sets. Each round: a photo on its own first, then two written
// clues that get easier. Photos are freely licensed on Wikimedia Commons.
export const SETS = {
  'guess-the-place': {
    title: 'Guess the Place',
    level: 'KS3 Geography',
    rounds: [
      { answer: 'Mount Fuji', accept: ['Mount Fuji', 'Mt Fuji', 'Fuji', 'Fujisan', 'Fuji-san', 'Fujiyama'],
        photo: photo('View of Mount Fuji from Hiroyama Park.jpg', 'Quercus acuta, CC0'),
        clues: ['A dormant volcano that last erupted in 1707. At 3,776 m it is the highest mountain in its country.', 'It rises on the island of Honshu, about 100 km south-west of Tokyo, Japan.'] },
      { answer: 'Victoria Falls', accept: ['Victoria Falls', 'Victoria Fall', 'Mosi-oa-Tunya', 'Mosi oa Tunya'],
        photo: photo('Lascar Victoria falls from a helicopter (4548273362).jpg', 'Jorge Láscar, CC BY 2.0'),
        clues: ['Its local name means “the smoke that thunders”. It is about 1.7 km wide.', 'A waterfall on the Zambezi River, on the border of Zambia and Zimbabwe.'] },
      { answer: 'Mount Everest', accept: ['Mount Everest', 'Mt Everest', 'Everest', 'Chomolungma', 'Sagarmatha', 'Qomolangma'],
        photo: photo('View of Mt. Everest from Kala Patthar.jpg', 'Niklassletteland, CC BY-SA 3.0'),
        clues: ['At 8,849 m above sea level, it is the highest point on Earth.', 'It stands in the Himalayas, on the border between Nepal and China.'] },
      { answer: 'Table Mountain', accept: ['Table Mountain', 'Table Mtn'],
        photo: photo('Table Mountain, Cape Town (P1050222).jpg', 'Matti Blume, CC BY-SA 4.0'),
        clues: ['A flat-topped mountain often covered by a “tablecloth” of cloud. You can ride a cable car to the top.', 'It towers over Cape Town, near the southern tip of Africa.'] },
      { answer: 'Great Barrier Reef', accept: ['Great Barrier Reef', 'The Great Barrier Reef', 'Barrier Reef'],
        photo: photo('Aerial View of Great Barrier Reef (Ank Kumar) 04.jpg', 'Ank Kumar, CC BY-SA 4.0'),
        clues: ['The world’s largest coral reef system, stretching over 2,300 km. Warming seas have caused coral bleaching here.', 'It lies in the Coral Sea, off the coast of Queensland, Australia.'] },
      { answer: 'Ha Long Bay', accept: ['Ha Long Bay', 'Halong Bay', 'Ha Long', 'Halong', 'Vinh Ha Long'],
        photo: photo('Junk Halong Bay Vietnam.jpg', 'Thomas Schoch, CC BY-SA 3.0'),
        clues: ['About 1,600 steep limestone islands rise from the sea here. It is a UNESCO World Heritage Site.', 'A bay in the Gulf of Tonkin, in northern Vietnam.'] },
      { answer: 'Mount Kilimanjaro', accept: ['Mount Kilimanjaro', 'Mt Kilimanjaro', 'Kilimanjaro', 'Kili'],
        photo: photo('Kilimanjaro from Amboseli.jpg', 'Sergey Pesterev, CC BY-SA 4.0'),
        clues: ['At 5,895 m this dormant volcano is the highest mountain in Africa. Its glaciers are shrinking fast.', 'It stands in Tanzania, close to the border with Kenya.'] },
      { answer: 'Palm Jumeirah', accept: ['Palm Jumeirah', 'The Palm Jumeirah', 'The Palm', 'Palm Island', 'Palm Islands', 'Palm Jumeira'],
        photo: photo('Palm Jumeirah on 8 May 2008 Pict 1.jpg', 'Imre Solt, CC BY-SA 3.0'),
        clues: ['An artificial island built from sand dredged from the sea floor, shaped like a tree.', 'It sticks out into the Persian Gulf from the coast of Dubai, UAE.'] },
      { answer: 'Tiger’s Nest', accept: ['Tigers Nest', 'Tiger Nest', 'Tiger’s Nest Monastery', 'Paro Taktsang', 'Taktsang', 'Taktshang'],
        photo: photo('Taktshang.jpg', 'Douglas J. McLaughlin, CC BY-SA 3.0'),
        clues: ['A Buddhist monastery clinging to a cliff about 900 m above the valley floor.', 'It overlooks the Paro valley in Bhutan, in the Himalayas.'] },
      { answer: 'Avenue of the Baobabs', accept: ['Avenue of the Baobabs', 'Avenue of Baobabs', 'Baobab Avenue', 'Alley of the Baobabs', 'Allee des Baobabs'],
        photo: photo('Avenue of Baobabs, Madagascar (22558139260).jpg', 'Rod Waddington, CC BY-SA 2.0'),
        clues: ['A dirt road lined with giant trees that can live for hundreds of years and store water in their trunks.', 'Near Morondava, on the west coast of Madagascar.'] }
    ]
  },
  // Easier set for Year 7: well-known places, a mix of human and physical
  // geography. The country is accepted as well as the place itself.
  'guess-the-place-y7': {
    title: 'Guess the Place: Year 7',
    level: 'KS3 Geography',
    rounds: [
      { answer: 'Bangkok', accept: ['Bangkok', 'Krung Thep', 'Chao Phraya', 'Chao Phraya River', 'Thailand'],
        photo: photo('Chao Phraya River in Bangkok 01.jpg', 'Krzysztof Golik, CC BY-SA 4.0'),
        clues: ['A busy capital city in South-east Asia, built beside a wide river full of boats.', 'It is the capital city of Thailand.'] },
      { answer: 'The Amazon Rainforest', accept: ['Amazon Rainforest', 'Amazon', 'Amazon Jungle', 'Amazonia', 'Amazon River', 'Brazil'],
        photo: photo('Aerial view of the Amazon Rainforest.jpg', 'lubasi, CC BY-SA 2.0'),
        clues: ['The largest tropical rainforest in the world, home to millions of kinds of plants and animals.', 'It grows around a huge river in South America, mostly in Brazil.'] },
      { answer: 'Singapore', accept: ['Singapore', 'Marina Bay', 'Marina Bay Sands'],
        photo: photo('Marina Bay Singapore-3499.jpg', 'Bijay Chaurasia, CC BY-SA 4.0'),
        clues: ['A small island city and country, famous for its skyscrapers and one of the busiest ports in the world.', 'Its name means “Lion City”. It lies just south of Malaysia.'] },
      { answer: 'The River Nile', accept: ['River Nile', 'Nile', 'Nile River', 'Egypt'],
        photo: photo('Nile River, Feluccas, Aswan, Egypt.jpg', 'Vyacheslav Argenberg, CC BY 4.0'),
        clues: ['One of the longest rivers in the world. Sailing boats called feluccas carry people along it.', 'It flows north through Egypt into the Mediterranean Sea.'] },
      { answer: 'New York', accept: ['New York', 'New York City', 'NYC', 'Manhattan', 'USA', 'United States', 'America'],
        photo: photo('Lower Manhattan from Staten Island Ferry Jan 2006.jpg', 'Diliff, CC BY 2.5'),
        clues: ['The biggest city in the United States, famous for its skyscrapers and yellow taxis.', 'The Statue of Liberty stands in its harbour.'] },
      { answer: 'Iceland', accept: ['Iceland', 'Strokkur', 'Geysir', 'Reykjavik'], reject: ['Ireland', 'Island'],
        photo: photo('Strokkur, Área geotérmica de Geysir, Suðurland, Islandia, 2014-08-16, DD 089.JPG', 'Diego Delso, CC BY-SA 4.0'),
        clues: ['Boiling water shoots high into the air from the ground. This is a geyser, on a volcanic island.', 'An island country in the North Atlantic Ocean. Its capital is Reykjavik.'] },
      { answer: 'Rio de Janeiro', accept: ['Rio de Janeiro', 'Rio', 'Brazil'],
        photo: photo('Contrasts of Rio de Janeiro - Rocinha, Ipanema, and Mountains at Sunrise.jpg', 'Donatas Dabravolskas, CC BY-SA 4.0'),
        clues: ['A big city in South America where homes built on steep hills sit right next to famous beaches.', 'A giant statue of Christ the Redeemer looks over this city in Brazil.'] },
      { answer: 'The Panama Canal', accept: ['Panama Canal', 'Panama', 'Miraflores Locks'],
        photo: photo('Panamax ship exiting the Miraflores locks.jpg', 'Dicklyon, CC BY-SA 4.0'),
        clues: ['A waterway built by people so that ships can travel between the Atlantic and Pacific Oceans.', 'It cuts through a narrow country in Central America with the same name.'] },
      { answer: 'Norway', accept: ['Norway', 'Fjord', 'Fjords', 'Norwegian fjords', 'Geirangerfjord', 'Geiranger'],
        photo: photo('Geirangerfjord LC0188.jpg', 'Jörg Hempel, CC BY-SA 2.0 DE'),
        clues: ['A long, narrow arm of the sea between steep mountain walls, carved out by a glacier. It is called a fjord.', 'This country in northern Europe is famous for its fjords. Its capital is Oslo.'] },
      { answer: 'The Arctic', accept: ['Arctic', 'The Arctic', 'Arctic Circle', 'North Pole', 'Svalbard', 'Arctic Ocean'],
        photo: photo('Svalbard DSCF1400 (23849118591).jpg', 'Frode Bjørshol, CC BY 2.0'),
        clues: ['A frozen region where polar bears live. In winter the sun does not rise for weeks and you can see the northern lights.', 'The cold region at the very top of the world, around the North Pole.'] }
    ]
  }
};

// ---------- helpers ----------
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function makeCode() { let c = ''; const b = randomBytes(5); for (let i = 0; i < 5; i++) c += CODE_CHARS[b[i] % CODE_CHARS.length]; return c; }
const makeKey = () => randomBytes(18).toString('hex');
const cleanCode = (c) => String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 5);

function norm(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[’'`]/g, '').replace(/[^a-z0-9]+/g, ' ')
    .replace(/\bmount\b/g, 'mt').replace(/^the /, '').replace(/\s+/g, ' ').trim();
}
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
// Accepts small spelling slips: 1 letter wrong for 5+ letters, 2 for 10+.
export function isCorrect(given, round) {
  const g = norm(given); if (!g) return false;
  // Real places one letter away from the answer (e.g. Ireland for Iceland).
  if ((round.reject || []).some((x) => norm(x) === g)) return false;
  return round.accept.concat(round.answer).some((a) => {
    const t = norm(a); if (g === t || g.replace(/ /g, '') === t.replace(/ /g, '')) return true;
    const allow = t.length >= 10 ? 2 : t.length >= 5 ? 1 : 0;
    return allow > 0 && lev(g.replace(/ /g, ''), t.replace(/ /g, '')) <= allow;
  });
}

// round_started_at is when the photo appears (READY_SECS after the teacher
// presses start). lastStage is 2 when a team got it right on the photo or
// clue 2, so clue 3 is never shown; otherwise 3.
function lastStageFor(answers, round) {
  return answers.some((a) => a.round === round && a.correct && a.stage <= 2) ? 2 : 3;
}
function timing(game, now, lastStage) {
  if (game.status !== 'round' || !game.round_started_at) return { stage: game.status === 'reveal' ? 3 : 0, stageLeft: 0, closed: game.status !== 'round', lastStage };
  const elapsed = (now - new Date(game.round_started_at).getTime()) / 1000;
  if (elapsed < 0) return { elapsed, stage: 0, inStage: 0, closed: false, ready: true, stageLeft: -elapsed, lastStage };
  const stage = Math.min(lastStage, Math.floor(elapsed / STAGE_SECS) + 1);
  const closed = elapsed >= lastStage * STAGE_SECS;
  const inStage = elapsed - (stage - 1) * STAGE_SECS;
  return { elapsed, stage, inStage, closed, stageLeft: closed ? 0 : Math.max(0, STAGE_SECS - inStage), lastStage };
}

function publicRound(set, game, t, showAnswer) {
  const r = set.rounds[game.round]; if (!r || game.status === 'lobby' || game.status === 'finished') return null;
  const shown = game.status === 'reveal' ? 3 : Math.max(1, t.stage);
  const out = { number: game.round + 1, photo: r.photo, clues: r.clues.slice(0, Math.max(0, shown - 1)) };
  if (showAnswer) out.answer = r.answer;
  return out;
}

async function loadGame(supabase, code) {
  const { data } = await supabase.from('sbl_team_games').select('*').eq('code', code).maybeSingle();
  if (!data || new Date(data.expires_at).getTime() < Date.now()) return null;
  return data;
}
async function loadTeamsAndAnswers(supabase, code) {
  const [{ data: teams }, { data: answers }] = await Promise.all([
    supabase.from('sbl_team_game_teams').select('id, name, team_key, removed, created_at').eq('game_code', code).order('created_at'),
    supabase.from('sbl_team_game_answers').select('team_id, round, stage, correct, points, created_at').eq('game_code', code).order('created_at')
  ]);
  return { teams: (teams || []).filter((t) => !t.removed), answers: answers || [] };
}
function scoreboard(teams, answers) {
  const pts = {}; answers.forEach((a) => { pts[a.team_id] = (pts[a.team_id] || 0) + (a.points || 0); });
  return teams.map((t) => ({ id: t.id, name: t.name, score: pts[t.id] || 0 })).sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}
function roundStatus(teamId, answers, round) {
  const mine = answers.filter((a) => a.team_id === teamId && a.round === round);
  const right = mine.find((a) => a.correct);
  return { attempts: mine.length, correct: !!right, points: right ? right.points : 0, stage: right ? right.stage : null };
}

// ---------- handler ----------
export async function teamGameHandler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  const supabase = getSupabaseAdmin();
  try {
    if (req.method === 'GET') return await getState(req, res, supabase);
    if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return res.status(405).json({ error: 'Method not allowed' }); }
    const b = req.body || {};
    if (b.action === 'create') return await create(req, res, supabase, b);
    if (b.action === 'join') return await join(res, supabase, b);
    if (b.action === 'answer') return await answer(res, supabase, b);
    if (b.action === 'host') return await host(res, supabase, b);
    return res.status(400).json({ error: 'Unknown action.' });
  } catch (err) {
    console.error('Team game error:', err && err.message);
    const missing = /sbl_team_game/.test((err && err.message) || '');
    return res.status(500).json({ error: missing ? 'Team games are not set up yet: run sql/014_team_games.sql in Supabase.' : 'Something went wrong. Please try again.' });
  }
}

async function create(req, res, supabase, b) {
  const session = await getSessionUser(req, res);
  if (!session || ['teacher', 'admin'].indexOf(session.profile.role) === -1) return res.status(403).json({ error: 'Log in with a teacher account to host a team game.' });
  const setSlug = SETS[b.set] ? b.set : 'guess-the-place';
  for (let tries = 0; tries < 6; tries++) {
    const code = makeCode(), hostKey = makeKey();
    const { error } = await supabase.from('sbl_team_games').insert({ code, set_slug: setSlug, host_key: hostKey, host_email: session.profile.email });
    if (!error) return res.status(200).json({ code, hostKey });
    if (!/duplicate|unique/i.test(error.message || '')) throw error;
  }
  return res.status(500).json({ error: 'Could not create a game code. Please try again.' });
}

async function join(res, supabase, b) {
  const code = cleanCode(b.code);
  const name = String(b.name || '').replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 24);
  if (name.length < 2) return res.status(400).json({ error: 'Choose a team name of at least 2 characters.' });
  const game = await loadGame(supabase, code);
  if (!game) return res.status(404).json({ error: 'No game found with that code. Check the code on the board.' });
  if (game.status === 'finished') return res.status(409).json({ error: 'That game has finished.' });
  const { teams } = await loadTeamsAndAnswers(supabase, code);
  if (teams.length >= MAX_TEAMS) return res.status(409).json({ error: 'This game is full.' });
  if (teams.some((t) => t.name.toLowerCase() === name.toLowerCase())) return res.status(409).json({ error: 'Another team already has that name. Choose a different one.' });
  const teamKey = makeKey();
  const { data, error } = await supabase.from('sbl_team_game_teams').insert({ game_code: code, name, team_key: teamKey }).select('id').single();
  if (error) {
    if (/duplicate|unique/i.test(error.message || '')) return res.status(409).json({ error: 'Another team already has that name. Choose a different one.' });
    throw error;
  }
  return res.status(200).json({ code, teamId: data.id, teamKey, name });
}

async function answer(res, supabase, b) {
  const code = cleanCode(b.code);
  const game = await loadGame(supabase, code);
  if (!game) return res.status(404).json({ error: 'This game has ended.' });
  const { data: team } = await supabase.from('sbl_team_game_teams').select('id, team_key, removed').eq('id', String(b.teamId || '')).eq('game_code', code).maybeSingle();
  if (!team || team.removed || team.team_key !== String(b.teamKey || '')) return res.status(403).json({ error: 'Your team is no longer in this game.' });
  const { data: roundAnswers } = await supabase.from('sbl_team_game_answers').select('round, stage, correct').eq('game_code', code).eq('round', game.round);
  const now = Date.now(), t = timing(game, now, lastStageFor(roundAnswers || [], game.round));
  if (game.status !== 'round' || t.closed) return res.status(409).json({ error: 'Time is up for this round.' });
  if (t.ready) return res.status(409).json({ error: 'Wait for the photo to appear.' });
  const text = String(b.answer || '').slice(0, 80).trim();
  if (!text) return res.status(400).json({ error: 'Type an answer first.' });
  const { data: mine } = await supabase.from('sbl_team_game_answers').select('correct').eq('game_code', code).eq('team_id', team.id).eq('round', game.round);
  if ((mine || []).some((a) => a.correct)) return res.status(409).json({ error: 'You have already got this one right.' });
  const attempts = (mine || []).length;
  if (attempts >= MAX_ATTEMPTS) return res.status(409).json({ error: 'No tries left for this round.' });
  const set = SETS[game.set_slug], round = set.rounds[game.round];
  const correct = isCorrect(text, round);
  let points = 0;
  if (correct) {
    if (t.stage === 1) points = attempts === 0 ? PHOTO_POINTS + Math.max(0, BONUS_SECS - Math.ceil(t.inStage)) : RETRY_POINTS;
    else points = CLUE_POINTS[t.stage - 1];
  }
  const { error } = await supabase.from('sbl_team_game_answers').insert({ game_code: code, team_id: team.id, round: game.round, stage: t.stage, answer: text, correct, points });
  if (error) throw error;
  return res.status(200).json({ correct, points, attemptsLeft: correct ? 0 : MAX_ATTEMPTS - attempts - 1 });
}

async function host(res, supabase, b) {
  const code = cleanCode(b.code);
  const game = await loadGame(supabase, code);
  if (!game || game.host_key !== String(b.hostKey || '')) return res.status(403).json({ error: 'This game has ended or you are not its host.' });
  const { data: roundAnswers } = await supabase.from('sbl_team_game_answers').select('round, stage, correct').eq('game_code', code).eq('round', game.round);
  const set = SETS[game.set_slug], now = Date.now(), t = timing(game, now, lastStageFor(roundAnswers || [], game.round));
  let patch = null;
  if (b.op === 'start') {
    const next = game.status === 'lobby' ? 0 : game.round + 1;
    patch = next >= set.rounds.length ? { status: 'finished' } : { status: 'round', round: next, round_started_at: new Date(now + READY_SECS * 1000).toISOString() };
  } else if (b.op === 'next-clue' && game.status === 'round' && !t.closed && !t.ready) {
    patch = t.stage >= t.lastStage ? { status: 'reveal' } : { round_started_at: new Date(now - t.stage * STAGE_SECS * 1000).toISOString() };
  } else if (b.op === 'reveal' && game.status === 'round') {
    patch = { status: 'reveal' };
  } else if (b.op === 'finish') {
    patch = { status: 'finished' };
  } else if (b.op === 'remove-team') {
    await supabase.from('sbl_team_game_teams').update({ removed: true }).eq('game_code', code).eq('id', String(b.teamId || ''));
    return res.status(200).json({ ok: true });
  }
  if (patch) { const { error } = await supabase.from('sbl_team_games').update(patch).eq('code', code); if (error) throw error; }
  return res.status(200).json({ ok: true });
}

async function getState(req, res, supabase) {
  const q = req.query || {};
  if (q.teamGame === 'sets') return res.status(200).json({ sets: Object.keys(SETS).map((k) => ({ slug: k, title: SETS[k].title, level: SETS[k].level, rounds: SETS[k].rounds.length })) });
  const code = cleanCode(q.code);
  const game = await loadGame(supabase, code);
  if (!game) return res.status(404).json({ error: 'No game found with that code.' });
  const isHost = q.hostKey && q.hostKey === game.host_key;
  const set = SETS[game.set_slug];
  const { teams, answers } = await loadTeamsAndAnswers(supabase, code);
  const now = Date.now(), t = timing(game, now, lastStageFor(answers, game.round));
  const board = scoreboard(teams, answers);
  const status = game.status === 'round' && t.closed ? 'closed' : game.status;
  const out = {
    code, status, setTitle: set.title, totalRounds: set.rounds.length, round: game.round + 1,
    stage: t.stage, lastStage: t.lastStage, ready: !!t.ready, readySecs: READY_SECS, stageSecs: STAGE_SECS, bonusSecs: BONUS_SECS,
    stageLeft: Math.round((t.stageLeft || 0) * 10) / 10, stagePoints: t.stage === 2 ? CLUE_POINTS[1] : t.stage === 3 ? CLUE_POINTS[2] : null,
    clue: publicRound(set, game, t, isHost || game.status === 'reveal'),
    scores: board.map((s) => ({ name: s.name, score: s.score }))
  };
  const answeredThisRound = (id) => roundStatus(id, answers, game.round);
  if (isHost) {
    out.isHost = true;
    // So the board can load the next photo before the teacher starts the round.
    const nextIdx = game.status === 'lobby' ? 0 : game.round + 1;
    if (set.rounds[nextIdx] && game.status !== 'round') out.nextPhoto = set.rounds[nextIdx].photo.url;
    out.teams = board.map((s) => Object.assign({ id: s.id }, s, { thisRound: game.status === 'lobby' ? null : answeredThisRound(s.id) }));
  } else if (q.teamId) {
    const me = teams.find((x) => x.id === q.teamId && x.team_key === q.teamKey);
    if (!me) return res.status(200).json(Object.assign(out, { removed: true }));
    const pos = board.findIndex((s) => s.id === me.id);
    out.me = { name: me.name, score: board[pos].score, rank: pos + 1, of: board.length, thisRound: game.status === 'lobby' ? null : answeredThisRound(me.id) };
  }
  if (game.status === 'reveal' || game.status === 'finished') {
    out.roundResults = board.map((s) => Object.assign({ name: s.name }, answeredThisRound(s.id)));
  }
  return res.status(200).json(out);
}
