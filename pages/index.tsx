import Link from 'next/link';
import React, { Component } from 'react';
import { fetchAll, PodcastChannel, getID } from '../data/Data';
import Layout from '../components/Layout';

const PostLink = (props) => (
  <Link as={`/podcast/${props.id}`} href={`/podcast?id=${props.id}`}>
    <a>{props.title}</a>
  </Link>
)

export default class Index extends Component<{ channel: PodcastChannel }> {
  static async getInitialProps({ req }) {
    return fetchAll(req);
  }

  render() {
    return <Layout>
      <style jsx>{`
        img {
          width: 100%;
        }

        .split {
          display: grid;
          grid-template-columns: 200px 1fr;
          grid-column-gap: 20px;
        }
      `}</style>
      <h1>ScriptCast - A podcast about JavaScript</h1>
      <Link href="/about"><a>About</a></Link>
      {
        this.props.channel.item.map(item => {
          const id = getID(item);
          return <div className="split">
            <div className="image-container">
              <img src={item["itunes:image"].$.href} alt="Cover image of episode"/>
            </div>
            <article>
              <h2><PostLink 
                title={item.title}
                key={id}
                id={id}
              /></h2>
            </article>
          </div>
        })
      }
    </Layout>
  }
}
