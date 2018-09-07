import React from 'react';

export type ContextState = {
  data: {
    url: string,
    type: string
  },
  setAudio: (url, type) => void
}

const AppContext = React.createContext({
  data: {
    url: undefined,
    type: undefined
  },
  setAudio: (url, type) => {}
});

export default AppContext;
