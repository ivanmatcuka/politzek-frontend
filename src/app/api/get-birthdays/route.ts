import { NextRequest, NextResponse } from 'next/server';

import { DEFAULT_OPTIONS_RESPONSE, res } from '~/utils/api';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export async function OPTIONS() {
  return NextResponse.json({}, DEFAULT_OPTIONS_RESPONSE);
}

export async function GET(req: NextRequest) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res({ error: 'Missing Supabase config' }, 500);
  }

  const { searchParams } = new URL(req.url);
  const date = searchParams.get('date');

  if (!date) {
    return res({ error: 'Missing or invalid date parameter' }, 400);
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/functions/v1/get-upcoming-birthdays?date=${encodeURIComponent(
        date,
      )}`,
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      return res({ error: 'Failed to fetch birthdays' }, response.status);
    }

    const data = await response.text();
    return res(data, 200);
  } catch (error) {
    return res({ error: 'Internal Server Error' }, 500);
  }
}
