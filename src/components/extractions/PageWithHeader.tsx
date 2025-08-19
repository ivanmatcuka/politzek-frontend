import { FC, PropsWithChildren } from 'react';

import { Header } from './Header';

type PageWithHeaderProps = {
  hideUserbar?: boolean;
};

export const PageWithHeader: FC<PropsWithChildren<PageWithHeaderProps>> = ({
  children,
  hideUserbar = false,
}) => (
  <>
    <Header hideUserbar={hideUserbar} />
    {children}
  </>
);
