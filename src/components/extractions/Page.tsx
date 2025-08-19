'use client';

import { FC, PropsWithChildren } from 'react';

import { Banner } from './Banner';
import { Footer } from './Footer';

export const Page: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Banner />
    {children}
    <Footer />
  </>
);
