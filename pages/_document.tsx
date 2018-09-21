import Document, { Head, Main, NextScript } from 'next/document';
import { Menu } from '../components/Menu';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Menu />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
