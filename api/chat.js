// This runs on the server, never in the student's browser.
// The Anthropic API key AND the Supabase service role key live in
// environment variables (set in your hosting platform's dashboard) —
// neither is ever sent to, or visible from, the browser.

import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Require a logged-in user before answering anything. This is what
  // actually enforces the login screen — without this check, the login
  // screen would just be for show, since the API would answer anyone.
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    res.status(401).json({ error: 'Not logged in' });
    return;
  }

  const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token);
  if (userError || !userData?.user) {
    res.status(401).json({ error: 'Invalid or expired session' });
    return;
  }

  const { system, messages } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'Missing messages' });
    return;
  }

  // Basic safety: cap how much conversation history gets sent, and cap
  // message length, so one runaway request can't rack up huge costs.
  const trimmedMessages = messages.slice(-20).map(m => ({
    role: m.role,
    content: String(m.content).slice(0, 4000)
  }));

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: String(system || '').slice(0, 6000),
        messages: trimmedMessages
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Anthropic API error:', data);
      res.status(response.status).json({ error: 'Upstream API error' });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}
