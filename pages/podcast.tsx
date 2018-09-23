import React, { Component, MouseEvent } from 'react';
import { fetchEntry, PodcastItem } from '../data/Data';
import Layout from '../components/Layout';
import Context from '../data/Context';
import Head from 'next/head';
import { urlToHTTPS } from '../data/Text';
import { Menu } from '../components/Menu';
import { Header } from '../components/Header';


export default class Podcast extends Component<{ item: PodcastItem }> {
  static async getInitialProps(req) {
    if(req.query && req.query.id) {
      return fetchEntry(req.query.id, req.req);
    }
  }

  startPlayer(e: MouseEvent) {
    e.preventDefault();
  }

  render() {
    const { item } = this.props;
    return <>
      <Head>
        <title>ScriptCast {item.title}</title>
      </Head>
      <Menu />    
      <Header episode={item}/>    
      <Layout>
        <article className="article">
          <div dangerouslySetInnerHTML={{ __html: item.HTMLdescription }}>
          </div>
        </article>
      </Layout>
    </>
  }
}
