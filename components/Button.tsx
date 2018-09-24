import { SFC } from 'react';

import '../styles/Button.css';

export const Button:SFC<{ 
  url? : string,
  onClick?: (e?: any) => any
}> = ({ url, onClick, children }) => {
  if (url) {
    return <a onClick={onClick} className="btn" href={url}>{children}</a>
  }
  return <button onClick={onClick} role="button" className="btn">{children}</button>
}
