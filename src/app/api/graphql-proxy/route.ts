import { NextRequest, NextResponse } from 'next/server';

import { DEFAULT_OPTIONS_RESPONSE, res } from '~/utils/api';

const SUPABASE_URL = process.env.SUPABASE_URL;

export async function OPTIONS() {
  return NextResponse.json({}, DEFAULT_OPTIONS_RESPONSE);
}

export async function POST(req: NextRequest) {
  if (!SUPABASE_URL) {
    return res({ error: 'Missing Supabase config' }, 500);
  }

  const body = await req.json();

  const response = await fetch(`${SUPABASE_URL}/graphql/v1`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.text();

  return res(data, response.status);
}
