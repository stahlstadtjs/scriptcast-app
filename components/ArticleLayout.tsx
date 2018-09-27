import { SFC } from 'react';

import Layout from './Layout';
import { Menu } from './Menu';

const ArticleLayout: SFC<{}> = ({ children }) => {
  return <>
    <Menu />
    <Layout>
      <div className="content">
        {children}
      </div>
    </Layout>
  </>
}

export default ArticleLayout;
