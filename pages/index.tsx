import Link from 'next/link';
import React, { Component } from 'react';
import { fetchAll, PodcastChannel, getID } from '../data/Data';
import Layout from '../components/Layout';

const PostLink = (props) => (
  <li>
    <Link as={`/podcast/${props.id}`} href={`/podcast?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default class Index extends Component<{ channel: PodcastChannel }> {
  static async getInitialProps({ req }) {
    return fetchAll(req);
  }

  render() {
    return <Layout>
      <h1>ScriptCast - A podcast about JavaScript</h1>
      <Link href="/about"><a>About</a></Link>
      <ul>
      {
        this.props.channel.item.map(item => {
          const id = getID(item);
          return <PostLink 
            title={item.title}
            key={id}
            id={id}
          />
        })
      }
      </ul>
    </Layout>
  }
}
