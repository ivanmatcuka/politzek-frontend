import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { AUTH_KEY } from './services/cookies';
import { authorizeTelegram } from './services/services';

export default async function middleware(req: NextRequest) {
  const userRaw = cookies().get(AUTH_KEY)?.value;
  const user = userRaw ? JSON.parse(userRaw) : null;

  const authorized = user && (await authorizeTelegram(user));

  if (!authorized) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile'],
};
