import Link from 'next/link';
import React, { Component, SFC } from 'react';
import { fetchAll, PodcastChannel, getID, PodcastItem } from '../data/Data';
import Layout from '../components/Layout';

const abstract = (text: string) => {
  const parts = text.slice(0, 500).split(' ');
  parts.pop();
  return parts.join(' ');
}

const PostLink = (props) => 
  <Link as={`/podcast/${props.id}`} href={`/podcast?id=${props.id}`}>
    <a>{props.title}</a>
  </Link>;

const Item : SFC<{ item: PodcastItem, id: string}> = ({item, id}) => <>
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
      <img src={item["itunes:image"].$.href} alt="Cover image of episode"/>
    </div>
    <article>
      <h2><PostLink 
        title={item.title}
        key={id}
        id={id}
      /></h2>
      <p>
        { abstract(item.description) } [<PostLink id={id} key={id} title='...' />]
      </p>
    </article>
  </div>
</>;

export default class Index extends Component<{ channel: PodcastChannel }> {
  static async getInitialProps({ req }) {
    return fetchAll(req);
  }

  render() {
    return <Layout>
      <h1>ScriptCast - A podcast about JavaScript</h1>
      <Link href="/about"><a>About</a></Link>
      {
        this.props.channel.item.map(item => {
          const id = getID(item);
          return <Item id={id} item={item}/>
        })
      }
    </Layout>
  }
}
