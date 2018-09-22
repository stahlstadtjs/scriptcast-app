import { SFC } from 'react';

import '../styles/Layout.css';

const Layout:SFC<{}> = ({ children }) => {
  return <>
    <main>
      {children}
    </main>
  </>
}

export default Layout;
