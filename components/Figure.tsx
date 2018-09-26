import { SFC } from 'react';

export const Figure:SFC<{ url: string, title: string, alt: string }> = ({ url, title, alt }) => {
  return <figure>
    <img src={url} alt={alt}/>
    <figcaption>{title}</figcaption>
  </figure>
}
