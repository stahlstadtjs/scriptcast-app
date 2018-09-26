import { SFC } from 'react';
import Link from 'next/link';

import '../styles/Footer.css';

export const Footer:SFC<{}> = () => {
  return <div className="footer-area">
    <section className="copyright">ScriptCast © 2018</section>
    <section className="footer-nav">
      <nav className="footer-nav-item">
        <strong className="footer-head">Find us on</strong>
        <a href="https://itunes.apple.com/at/podcast/scriptcast-a-podcast-about-javascript/id1247618721?"
          className="footer-link" target="_blank" rel="noopener noreferrer">iTunes</a>
        <a href="https://soundcloud.com/scriptcast"
          className="footer-link" target="_blank" rel="noopener noreferrer">SoundCloud</a>
        <a href="https://overcast.fm/itunes1247618721/scriptcast-a-podcast-about-javascript" 
          className="footer-link" target="_blank" rel="noopener noreferrer">Overcast</a>
        <a href="https://player.fm/series/scriptcast-a-podcast-about-javascript" 
          className="footer-link" target="_blank" rel="noopener noreferrer">Player.fm</a>
        <a href="https://www.stitcher.com/podcast/scriptconf/scriptcast-a-podcast-about-javascript" 
          className="footer-link" target="_blank" rel="noopener noreferrer">Stitcher</a>
        <a href="http://feeds.soundcloud.com/users/soundcloud:users:306408165/sounds.rss"
          className="footer-link" target="_blank" rel="noopener noreferrer">RSS</a>
      </nav>
      <nav className="footer-nav-item">
        <strong className="footer-head">About Scriptcast</strong>
        <Link href="/about"><a className="footer-link">About</a></Link>
        <a href="https://scriptconf.org"
          className="footer-link" target="_blank" rel="noopener noreferrer">ScriptConf</a>
        <a href="https://twitter.com/ddprrt" 
          className="footer-link" target="_blank" rel="noopener noreferrer">Stefan on Twitter</a>
          <a href="https://twitter.com/scriptconf" 
            className="footer-link" target="_blank" rel="noopener noreferrer">ScriptConf on Twitter</a>
        <a href="https://workingdraft.de" 
          className="footer-link" target="_blank" rel="noopener noreferrer">Working Draft Podcast</a>
      </nav>
    </section>
  </div>
}
