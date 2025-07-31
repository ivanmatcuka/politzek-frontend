import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL;

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}

export async function POST(req: NextRequest) {
  if (!SUPABASE_URL) {
    return new Response(JSON.stringify({ error: 'Missing Supabase config' }), {
      headers: DEFAULT_HEADERS,
      status: 500,
    });
  }

  const body = await req.json();

  const response = await fetch(`${SUPABASE_URL}/graphql/v1`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      ...DEFAULT_HEADERS,
    },
  });

  const data = await response.text();

  return new Response(data, {
    headers: DEFAULT_HEADERS,
    status: response.status,
  });
}
