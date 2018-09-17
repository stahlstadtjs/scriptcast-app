import { SFC } from 'react';
import { PodcastItem } from '../data/Data';
import { formatDate, abstract } from "../data/Text";
import { PostLink } from "./PostLink";

export const Item: SFC<{
  item: PodcastItem;
  id: string;
  key: string;
}> = ({ item, id }) => <>
  <style jsx>{`
    img {
      width: 100%;
    }

    .split {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-column-gap: 2rem;
      margin-bottom: 2rem;
    }
  `}</style>
  <div className="split">
    <div className="image-container">
      <img src={item["itunes:image"].$.href} alt="Cover image of episode" />
    </div>
    <article>
      <h2><PostLink title={item.title} id={id} /></h2>
      <time dateTime={item.pubDate}>{formatDate(item.pubDate)}</time>
      <p>
        {abstract(item.description)} [<PostLink id={id} key={id} title='...' />]
      </p>
    </article>
  </div>
</>;
