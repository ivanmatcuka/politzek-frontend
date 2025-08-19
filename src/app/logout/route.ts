import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { AUTH_KEY } from '~/services/cookies';

export async function GET() {
  cookies().delete(AUTH_KEY);
  return redirect('/');
}
