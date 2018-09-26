import App, { Container } from 'next/app'
import React from 'react';
import Player from '../components/Player';
import Context, { ContextState } from '../data/Context';
import { PodcastItem } from 'data/Data';

export default class MyApp extends App<{}, ContextState> {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps }
  }

  setAudio(item: PodcastItem) {
    this.setState({
      data: item
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      data: {
        url: undefined,
        type: undefined,
      },
      setAudio: this.setAudio.bind(this)
    }
  }

  render () {
    const { Component, pageProps } = this.props;
    const state = this.state as ContextState;
    return <Context.Provider value={state}>
      <Container>
        <Component {...pageProps} />
        <Player item={state.data} />
      </Container>
    </Context.Provider>
  }
}
