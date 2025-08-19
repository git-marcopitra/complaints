import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main bg="#112" minHeight="100vh">
    {children}
  </Main>
);

export default Layout;
