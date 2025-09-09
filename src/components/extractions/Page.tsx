'use client';

import { FC, PropsWithChildren } from 'react';

import { Banner } from './Banner';
import { Footer } from './Footer';

export const Page: FC<PropsWithChildren> = ({ children }) => (
  <div style={{ overflowX: 'clip' }}>
    <Banner />
    {children}
    <Footer />
  </div>
);
