import { SFC, MouseEvent } from 'react';
import { PodcastItem, getID } from '../data/Data';

import '../styles/Header.css';
import { formatDate, urlToHTTPS } from '../data/Text';
import { Button } from './Button';
import Context from '../data/Context';
import { PostLink } from './PostLink';

export const Header:SFC<{ episode?: PodcastItem, latest?: boolean }> = ({ episode, latest }) => {
  let more;
  let Headline = 'h1';
  if (latest) {
    more = <PostLink classes="btn secondary" title="Get to the shownotes of our latest episode" id={getID(episode)}>More</PostLink>;
    Headline = 'h2';
  }
  return <Context.Consumer>
    {({ setAudio }) => (
    <div className="masthead photo">
      <div className="wrapper">
        <img className="masthead-cover" 
          src={urlToHTTPS(episode['itunes:image'].$.href)} 
          alt="Episode image"/>
        <div className="meta">
          <img className="logo" src="/static/assets/logo.svg" alt="ScriptCast - A Podcast about JavaScript"/>
          <p>{latest ? 'Latest Episode'.toUpperCase() + ' | ' : '' }{formatDate(episode.pubDate)}</p>
          <Headline>{episode.title}</Headline>
          <Button onClick={(e: MouseEvent) => { 
            e.preventDefault(); 
            setAudio(episode)
          }} url={episode.enclosure.$.url}>Play</Button>
          { more }
        </div>
      </div>
    </div>)}
  </Context.Consumer>;
}
