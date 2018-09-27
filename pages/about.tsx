import ArticleLayout from '../components/ArticleLayout';
import About from '../articles/about.mdx';
import Head from 'next/head';

export default () => <ArticleLayout>
  <Head>
    <title>About ScriptCast</title>
  </Head>
  <About />
</ArticleLayout>;
