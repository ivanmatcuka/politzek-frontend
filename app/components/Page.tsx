import { FC, PropsWithChildren } from 'react';

import { Banner } from './Banner/Banner';
import { Footer } from './Footer/Footer';

export const Page: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Banner />
    {children}
    <Footer />
  </>
);
