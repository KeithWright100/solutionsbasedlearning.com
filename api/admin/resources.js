// /api/admin/resources — POST { action, ...payload }
//
// Teacher-only management of the lesson Resources card (Lesson
// Slides / Lesson Notes / Key Terms / Diagrams & Models / Data
// Sheets). Consolidated into ONE serverless function together with
// /api/resources.js (the student-facing read/download endpoint),
// the same way /api/admin/action.js already consolidates several
// admin actions — this project is on Vercel's Hobby-plan cap of 12
// Serverless Functions per deployment, and adding these two brings
// the project to exactly that limit. If another endpoint is ever
// needed, either fold it into an existing file the same way, or
// move the project to a paid Vercel plan first.
//
// Every action requires an active admin session (checked once, up
// front) — see api/_lib/auth.js.
//
// Files live in the private 'lesson-resources' Supabase Storage
// bucket (see sql/004_lesson_resources.sql). Uploads go straight
// from the browser to Storage via a short-lived signed upload URL —
// the file's bytes never pass through this function — which keeps
// this endpoint fast and avoids Vercel's request body size limits
// for larger PDFs/PPTX files. The flow is:
//   1. 'create-upload-url' — get a one-time signed URL for a slot.
//   2. Browser PUTs the file directly to that URL.
//   3. 'confirm-upload' — record the completed upload in the table
//      (and clean up whatever file previously occupied that slot).

import { requireAdmin } from '../_lib/auth.js';
import { getSupabaseAdmin } from '../_lib/supabaseAdmin.js';

const BUCKET = 'lesson-resources';
const RESOURCE_TYPES = ['slides', 'notes', 'key_terms', 'diagrams', 'data_sheets'];
const MAX_LESSON_ID_LENGTH = 200;
const MAX_FILE_NAME_LENGTH = 200;

function isValidResourceType(t) {
  return typeof t === 'string' && RESOURCE_TYPES.indexOf(t) !== -1;
}
function isNonEmptyString(s, max) {
  return typeof s === 'string' && s.trim().length > 0 && s.length <= max;
}

// Keeps the storage path readable (for debugging in the Supabase
// dashboard) while stripping anything that isn't safe in a path.
function sanitizeFileName(name) {
  return String(name).trim().replace(/[^a-zA-Z0-9._-]+/g, '-').slice(0, MAX_FILE_NAME_LENGTH) || 'file';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await requireAdmin(req, res);
  if (!session) return; // requireAdmin has already sent the 401/403

  const action = req.body && req.body.action;

  if (action === 'list') return handleList(req, res);
  if (action === 'create-upload-url') return handleCreateUploadUrl(req, res);
  if (action === 'confirm-upload') return handleConfirmUpload(req, res, session);
  if (action === 'delete') return handleDelete(req, res);

  return res.status(400).json({ error: 'Unknown or missing action.' });
}

// ---------------------------------------------------------------
// list — no payload. Returns every resource currently on file, for
// the admin page to show what's already uploaded against each
// lesson × slot.
// ---------------------------------------------------------------
async function handleList(req, res) {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from('sbl_lesson_resources')
    .select('id, lesson_id, resource_type, file_name, file_size, content_type, uploaded_at')
    .order('lesson_id', { ascending: true });

  if (error) {
    console.error('Failed to list lesson resources:', error);
    return res.status(500).json({ error: 'Could not load resources.' });
  }

  return res.status(200).json({
    resources: (data || []).map((row) => ({
      id: row.id,
      lessonId: row.lesson_id,
      resourceType: row.resource_type,
      fileName: row.file_name,
      fileSize: row.file_size,
      contentType: row.content_type,
      uploadedAt: row.uploaded_at
    }))
  });
}

// ---------------------------------------------------------------
// create-upload-url — { lessonId, resourceType, fileName, contentType? }
// Issues a signed URL the browser can PUT the file to directly.
// Does not touch the database yet — call 'confirm-upload' once the
// PUT has succeeded.
// ---------------------------------------------------------------
async function handleCreateUploadUrl(req, res) {
  const { lessonId, resourceType, fileName } = req.body || {};

  if (!isNonEmptyString(lessonId, MAX_LESSON_ID_LENGTH)) {
    return res.status(400).json({ error: 'lessonId is required.' });
  }
  if (!isValidResourceType(resourceType)) {
    return res.status(400).json({ error: 'resourceType must be one of: ' + RESOURCE_TYPES.join(', ') + '.' });
  }
  if (!isNonEmptyString(fileName, MAX_FILE_NAME_LENGTH)) {
    return res.status(400).json({ error: 'fileName is required.' });
  }

  // Timestamped so a replacement upload never collides with (or gets
  // cached in place of) the file it's replacing.
  const path = `lessons/${encodeURIComponent(lessonId)}/${resourceType}/${Date.now()}-${sanitizeFileName(fileName)}`;

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase.storage.from(BUCKET).createSignedUploadUrl(path);

  if (error || !data) {
    console.error('Failed to create signed upload URL:', error);
    return res.status(500).json({ error: 'Could not prepare the upload. Confirm the lesson-resources storage bucket exists (see sql/004_lesson_resources.sql).' });
  }

  return res.status(200).json({ signedUrl: data.signedUrl, token: data.token, path: data.path || path });
}

// ---------------------------------------------------------------
// confirm-upload — { lessonId, resourceType, fileName, storagePath, fileSize?, contentType? }
// Call this once the browser's direct PUT to the signed URL has
// succeeded. Records the file against the (lesson, slot), replacing
// whatever was there before.
// ---------------------------------------------------------------
async function handleConfirmUpload(req, res, session) {
  const { lessonId, resourceType, fileName, storagePath, fileSize, contentType } = req.body || {};

  if (!isNonEmptyString(lessonId, MAX_LESSON_ID_LENGTH)) {
    return res.status(400).json({ error: 'lessonId is required.' });
  }
  if (!isValidResourceType(resourceType)) {
    return res.status(400).json({ error: 'resourceType must be one of: ' + RESOURCE_TYPES.join(', ') + '.' });
  }
  if (!isNonEmptyString(fileName, MAX_FILE_NAME_LENGTH) || !isNonEmptyString(storagePath, 500)) {
    return res.status(400).json({ error: 'fileName and storagePath are required.' });
  }

  const supabase = getSupabaseAdmin();

  // Remember what (if anything) previously occupied this slot, so
  // its file can be cleaned up from Storage after the new row is
  // safely saved.
  const { data: existing } = await supabase
    .from('sbl_lesson_resources')
    .select('storage_path')
    .eq('lesson_id', lessonId)
    .eq('resource_type', resourceType)
    .maybeSingle();

  const { error: upsertError } = await supabase
    .from('sbl_lesson_resources')
    .upsert(
      {
        lesson_id: lessonId,
        resource_type: resourceType,
        file_name: fileName,
        storage_path: storagePath,
        file_size: typeof fileSize === 'number' ? fileSize : null,
        content_type: typeof contentType === 'string' ? contentType : null,
        uploaded_by: session.user.id,
        uploaded_at: new Date().toISOString()
      },
      { onConflict: 'lesson_id,resource_type' }
    );

  if (upsertError) {
    console.error('Failed to save lesson resource:', upsertError);
    return res.status(500).json({ error: 'The file uploaded, but could not be saved against this lesson. Please try again.' });
  }

  if (existing && existing.storage_path && existing.storage_path !== storagePath) {
    const { error: removeError } = await supabase.storage.from(BUCKET).remove([existing.storage_path]);
    if (removeError) {
      console.error('Failed to remove replaced resource file:', removeError);
      // Not fatal — the new file is live either way, this just leaves
      // an orphaned old file in Storage.
    }
  }

  return res.status(200).json({ ok: true });
}

// ---------------------------------------------------------------
// delete — { id }
// Removes a resource entirely (both the Storage file and the row),
// leaving that slot empty on the lesson page.
// ---------------------------------------------------------------
async function handleDelete(req, res) {
  const { id } = req.body || {};
  if (!id) {
    return res.status(400).json({ error: 'id is required.' });
  }

  const supabase = getSupabaseAdmin();

  const { data: row, error: fetchError } = await supabase
    .from('sbl_lesson_resources')
    .select('storage_path')
    .eq('id', id)
    .maybeSingle();

  if (fetchError || !row) {
    return res.status(404).json({ error: 'Resource not found.' });
  }

  const { error: deleteError } = await supabase
    .from('sbl_lesson_resources')
    .delete()
    .eq('id', id);

  if (deleteError) {
    console.error('Failed to delete lesson resource row:', deleteError);
    return res.status(500).json({ error: 'Could not delete this resource.' });
  }

  const { error: removeError } = await supabase.storage.from(BUCKET).remove([row.storage_path]);
  if (removeError) {
    console.error('Failed to remove deleted resource file from storage:', removeError);
    // Row is already gone from the table (so the site no longer
    // links to it) — a leftover file in Storage isn't user-visible.
  }

  return res.status(200).json({ ok: true });
}
