import React, { Component, MouseEvent } from 'react';
import { fetchEntry, PodcastItem } from '../data/Data';
import Layout from '../components/Layout';
import Context from '../data/Context';

const urlToHTTPS = (url) => url.replace('http://', 'https://');

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
    return <Context.Consumer>
      {({ setAudio }) => (
      <Layout>
        <style jsx>{`
          img {
            width: 100%;
          }

          .split {
            display: grid;
            grid-template-columns: 200px 1fr;
            grid-column-gap: 2rem;
          }
        `}</style>
        <div className="split">
          <div className="image">
            <img src={urlToHTTPS(item["itunes:image"].$.href)} alt="Cover image"/>
          </div>
          <article>
            <h1>Episode { item.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: item.HTMLdescription }}>
            </div>
            <button onClick={() => setAudio(item.enclosure.$.url, item.enclosure.$.type)}>Play</button>
          </article>
        </div>
      
      </Layout>)}
    </Context.Consumer>
  }
}
