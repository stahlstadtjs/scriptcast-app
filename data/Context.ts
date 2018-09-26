import React from 'react';
import { PodcastItem } from './Data';

export type ContextState = {
  data: PodcastItem,
  setAudio: (item: PodcastItem) => void
}

const AppContext = React.createContext({
  data: undefined,
  setAudio: (item: PodcastItem) => {}
});

export default AppContext;
