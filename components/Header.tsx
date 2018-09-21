import { SFC } from 'react';
import { PodcastItem } from '../data/Data';

import styles from '../styles/Header.css';

export const Header:SFC<{ episode?: PodcastItem }> = (episode) => <div className={styles.masthead}>
  <div className={styles.wrapper}>
    <img className={styles.logo} src="/static/assets/logo.svg" alt="ScriptCast - A Podcast about JavaScript"/>
  </div>
</div>
