import { NextRequest, NextResponse } from 'next/server';

import { ReleasesResponse } from '~/services/services';
import { API, DEFAULT_OPTIONS_RESPONSE, res } from '~/utils/api';

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
    const response = await API.get<ReleasesResponse>(
      `${SUPABASE_URL}/functions/v1/get-upcoming-releases?date=${encodeURIComponent(
        date,
      )}`,
      {},
      {
        authorization: `Bearer ${SUPABASE_KEY}`,
      },
    );

    if (!response) {
      return res({ error: 'No upcoming releases' }, 404);
    }

    return res(response, 200);
  } catch (error) {
    return res({ error: 'Internal Server Error' }, 500);
  }
}
