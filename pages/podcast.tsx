import React, { Component } from 'react';
import { fetchEntry, PodcastItem } from '../data/Data';
import { convertBreaks } from '../data/Util';
import Layout from '../components/Layout';

const urlToHTTPS = (url) => url.replace('http://', 'https://');

export default class Podcast extends Component<{ item: PodcastItem }> {
  static async getInitialProps(req) {
    if(req.query && req.query.id) {
      return fetchEntry(req.query.id, req.req);
    }
  }

  render() {
    const { item } = this.props;
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
      <div className="split">
        <div className="image">
          <img src={urlToHTTPS(item["itunes:image"].$.href)} alt="Cover image"/>
        </div>
        <article>
          <h1>Episode { item.title }</h1>
          <p dangerouslySetInnerHTML={{ __html: convertBreaks(item.description) }}>
          </p>
          <p>
            <audio controls>
              <source type={item.enclosure.$.type} src={item.enclosure.$.url}/>
            </audio>
          </p>
        </article>
      </div>
      
    </Layout>
  }
}
