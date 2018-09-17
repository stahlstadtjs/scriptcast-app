import React, { Component } from 'react';
import { fetchAll, PodcastChannel, getID } from '../data/Data';
import Layout from '../components/Layout';
import { Item } from '../components/Item';
import Head from 'next/head';

export default class Index extends Component<{ channel: PodcastChannel }> {
  static async getInitialProps({ req }) {
    return fetchAll(req);
  }

  render() {
    return <Layout>
      <Head>
        <title>ScriptCast - A podcast about JavaScript</title>
      </Head>
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
