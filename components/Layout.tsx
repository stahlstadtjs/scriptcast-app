import { SFC } from 'react';

import '../styles/Layout.css';
import { Footer } from './Footer';

const Layout:SFC<{}> = ({ children }) => {
  return <>
    <main>
      {children}
    </main>
    <Footer />
  </>
}

export default Layout;
