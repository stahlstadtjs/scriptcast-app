import App, { Container } from 'next/app'
import React from 'react';
import Player from '../components/Player';
import Context, { ContextState } from '../data/Context';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps }
  }

  setAudio(url, type) {
    this.setState({
      data: {
        url,
        type
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {
        url: undefined,
        type: undefined,
      },
      setAudio: (url, type) => this.setAudio(url, type)
    }
  }

  render () {
    const { Component, pageProps } = this.props;
    return <Context.Provider value={(this.state as ContextState)}>
      <Container>
        <Component {...pageProps} />
        <Player url={(this.state as ContextState).data.url} />
      </Container>
    </Context.Provider>
  }
}
