import { FC, PropsWithChildren } from 'react';

import { Header } from './Header';

export const PageWithHeader: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
