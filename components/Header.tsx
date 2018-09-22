import { SFC } from 'react';
import { PodcastItem, getID } from '../data/Data';

import '../styles/Header.css';
import { formatDate, urlToHTTPS } from '../data/Text';
import { Button } from './Button';
import Context from '../data/Context';
import { PostLink } from './PostLink';

export const Header:SFC<{ episode?: PodcastItem }> = ({ episode }) =>
  <Context.Consumer>
    {({ setAudio }) => (
    <div className="masthead photo">
      <div className="wrapper">
        <img className="masthead-cover" 
          src={urlToHTTPS(episode['itunes:image'].$.href)} 
          alt="Episode image"/>
        <div className="meta">
          <img className="logo" src="/static/assets/logo.svg" alt="ScriptCast - A Podcast about JavaScript"/>
          <p>{'Latest Episode'.toUpperCase()} | {formatDate(episode.pubDate)}</p>
          <h2>{episode.title}</h2>
          <Button onClick={() => setAudio(episode.enclosure.$.url, episode.enclosure.$.type)}>Play</Button>
          <PostLink classes="btn secondary" title="More" id={getID(episode)}/>
        </div>
      </div>
    </div>)}
  </Context.Consumer>
