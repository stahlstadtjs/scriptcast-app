import React, { Component } from 'react';
import Player from '../components/Player';
import Context, { ContextState } from '../data/Context';
import { PodcastItem } from '../data/Data';

export default class MyApp extends Component<{}, ContextState> {
  
  setAudio(item: PodcastItem) {
    this.setState({
      data: item
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      setAudio: this.setAudio.bind(this)
    }
  }

  render () {
    const state = this.state;
    const { children } = this.props
    return <Context.Provider value={state}>
      { children }
      <Player item={state.data} />
    </Context.Provider>
  }
}
