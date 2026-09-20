// api/_lib/supabaseAdmin.js
// Shared Supabase client using the SERVICE ROLE key. This bypasses
// Row Level Security entirely, so it must only ever be imported from
// files under /api (server-side, Node runtime) — never from
// anything sent to the browser, and never from middleware.js (which
// runs on the Edge runtime and does not use this file at all).

import { createClient } from '@supabase/supabase-js';

let cachedClient = null;

export function getSupabaseAdmin() {
  if (cachedClient) return cachedClient;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must both be set as Vercel environment variables.'
    );
  }

  cachedClient = createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false }
  });

  return cachedClient;
}
