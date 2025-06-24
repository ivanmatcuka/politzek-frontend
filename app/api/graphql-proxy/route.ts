import { NextRequest } from 'next/server';

const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;

export async function POST(req: NextRequest) {
  if (!SUPABASE_KEY || !SUPABASE_URL) {
    return new Response(JSON.stringify({ error: 'Missing Supabase config' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await req.json();

  const response = await fetch(`${SUPABASE_URL}/graphql/v1`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return new Response(data, {
    status: response.status,
    headers: { 'Content-Type': 'application/json' },
  });
}
