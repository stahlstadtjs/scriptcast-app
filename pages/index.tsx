import React, { Component } from 'react';
import { fetchAll, PodcastChannel, getID } from '../data/Data';
import Layout from '../components/Layout';
import { Item } from '../components/Item';

export default class Index extends Component<{ channel: PodcastChannel }> {
  static async getInitialProps({ req }) {
    return fetchAll(req);
  }

  render() {
    return <Layout>
      <h1>ScriptCast - A podcast about JavaScript</h1>
      {
        this.props.channel.item.map(item => {
          const id = getID(item);
          return <Item key={id} id={id} item={item}/>
        })
      }
    </Layout>
  }
}
