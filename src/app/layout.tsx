import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './globals.css';

import { ApolloWrapper } from '~/apollo/ApolloWrapper';
import ThemeRegistry from '~/theming/ThemeRegistry';

import Maintainance from './maintainance/page';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  const title = 'politzek.org - площадка помощи политзаключенным в России';
  const description = 'Площадка помощи политзаключенным в России';

  return {
    description,
    title,
    openGraph: {
      description,
      images: '/images/logo.svg',
      title,
    },
  };
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ApolloWrapper>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <ThemeRegistry>
              {process.env.MAINTAINANCE !== 'true' ? (
                children
              ) : (
                <Maintainance />
              )}
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </ApolloWrapper>
        {process.env.NODE_ENV === 'production' && (
          <script src="/ym.js" type="text/javascript" async />
        )}
      </body>
    </html>
  );
}
