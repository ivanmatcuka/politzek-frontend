import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './globals.css';
import Maintainance from './maintainance/page';

import { ApolloWrapper } from '../ApolloWrapper';
import ThemeRegistry from '../theming/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  const title = 'Если б не было войны';
  const description = 'Платформа для помощи политзаключенным в России';

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
      <body className={inter.className}>
        <ApolloWrapper>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <ThemeRegistry>
              <Banner />
              <Header />
              {process.env.MAINTAINANCE !== 'true' ? (
                children
              ) : (
                <Maintainance />
              )}
              <Footer />
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
