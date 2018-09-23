import React, { Component } from 'react';
import { fetchAll, PodcastChannel, getID } from '../data/Data';
import Layout from '../components/Layout';
import { Item } from '../components/Item';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

export default class Index extends Component<{ channel: PodcastChannel }> {
  static async getInitialProps({ req }) {
    return fetchAll(req);
  }

  getItems() {
    return this.props.channel.item.slice(1).map(item => {
      const id = getID(item);
      return <Item key={id} id={id} item={item}/>
    })
  }

  render() {
    return <>
      <Menu />        
      <h1 className="visually-hidden">ScriptCast - A podcast about JavaScript</h1>
      <Header latest={true} episode={this.props.channel.item[0]}/>
      <Layout>
        <Head>
          <title>ScriptCast - A podcast about JavaScript</title>
        </Head>
        { this.getItems() }
      </Layout>
    </>
  }
}
