import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './globals.css';
import Maintainance from './maintainance/page';

import { ApolloWrapper } from '../ApolloWrapper';
import ThemeRegistry from '../theming/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  const title = 'politzek.org - площадка помощи политзаключенным в России';
  const description = 'Площадка помощи политзаключенным в России';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: '/images/logo.svg',
    },
  };
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
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
          <script type="text/javascript" src="/ym.js" async />
        )}
      </body>
    </html>
  );
}
