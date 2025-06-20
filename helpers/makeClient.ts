import { ApolloLink, HttpLink } from '@apollo/client';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function makeClient() {
  const httpLink = new HttpLink({
    uri: API_URL,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    ssrMode: typeof window === 'undefined',
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}
