import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export async function OPTIONS() {
  return new NextResponse('', {
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  if (!SUPABASE_KEY || !SUPABASE_URL) {
    return new Response(JSON.stringify({ error: 'Missing Supabase config' }), {
      status: 500,
      headers: DEFAULT_HEADERS,
    });
  }

  const body = await req.json();

  const response = await fetch(`${SUPABASE_URL}/graphql/v1`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      authorization: `Bearer ${SUPABASE_KEY}`,
      ...DEFAULT_HEADERS,
    },
    body: JSON.stringify(body),
  });

  const data = await response.text();
  return new Response(data, {
    status: response.status,
    headers: DEFAULT_HEADERS,
  });
}
