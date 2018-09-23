import { SFC } from 'react';
import { PodcastItem, getID } from '../data/Data';
import { formatDate, splitTitle } from "../data/Text";
import { PostLink } from "./PostLink";
import '../styles/Item.css';

export const Item: SFC<{
  item: PodcastItem;
  id: string;
  key: string;
}> = ({ item, id }) => {
  const { number, trunkatedTitle } = splitTitle(item.title);
  return <div className="split">
    <div className="image-container">
      <img src={item["itunes:image"].$.href} alt="Cover image of episode" />
    </div>
    <article>
      <p className="time">
        ScriptCast <strong>{number}</strong> | <time dateTime={item.pubDate}>{formatDate(item.pubDate)}</time>
      </p>
      <h2><PostLink title={trunkatedTitle} id={id} /></h2>
      <p>
      <PostLink classes="btn" title="More" id={getID(item)}/>
      </p>
    </article>
  </div>
};
