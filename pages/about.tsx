import Layout from '../components/Layout';
import { Menu } from '../components/Menu';
import About from '../articles/about.mdx';

export default () => <>
  <Menu />
  <Layout>
    <About />
  </Layout>
</>;
