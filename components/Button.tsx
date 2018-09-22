import { SFC } from 'react';

import '../styles/Button.css';

export const Button:SFC<{ 
  url? : string,
  onClick?: () => any
}> = ({ url, onClick, children }) => {
  if (url) {
    return <a className="btn" href={url}>{children}</a>
  }
  return <button onClick={onClick} className="btn">{children}</button>
}
