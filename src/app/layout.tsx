import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Nunito_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import './globals.css';

import { ApolloWrapper } from '~/apollo/ApolloWrapper';
import ThemeRegistry from '~/theming/ThemeRegistry';

import Maintainance from './maintainance/page';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export async function generateMetadata() {
  const title = 'politzek.org - площадка помощи политзаключенным в России';
  const description =
    'Площадка помощи политзаключенным в России. Команда politzek.org собирает самую обширную базу данных политических преследований за всю историю современной России.';

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
      <body className={nunitoSans.className}>
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
