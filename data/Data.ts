import { parseString } from 'xml2js';
import fetch from 'isomorphic-unfetch';
import { convertBreaks } from './Util';
import linkifyHtml from 'linkifyjs/html';

export type RSS = {
  rss: {
    [key: string]: any
    channel: PodcastChannel
  }
}

export type PodcastChannel = {
  title: string,
  description: string,
  link: string,
  item: Array<PodcastItem>
};

export type PodcastItem = {
  [key: string]: any,
  title: string,
  pubDate: string,
  description: string,
  link: string,
  'itunes:duration': string,
  enclosure: { 
    '$': { 
      type: string,
      url: string,
      length: 40431981
    } 
  },
  'itunes:image': { 
    '$': { 
      href: string 
    } 
  } 
}

const mappedEntries = new Map<string, PodcastItem>();

const linkifyOptions = {
  attributes: {
    rel: 'nofollow'
  }
};

let results: RSS = undefined;

const parsePromise = (xml) => new Promise<RSS>((resolve, reject) => {
  parseString(xml, { explicitArray: false }, (err, result) => {
    if (err) reject(err);
    resolve(result as RSS);
  })
});

export const getID = (item: PodcastItem) => item.link.split('/').pop().split('-').shift();

const createMap = (results: RSS, map: Map<string, PodcastItem>) => {
  results.rss.channel.item.forEach(el => {
    el.HTMLdescription = linkifyHtml(convertBreaks(el.description), linkifyOptions);
    map.set(getID(el), el);
  })
}

const getBaseUrl = (req) => {
  if (req) {
    return req ? `${req.protocol}://${req.get('Host')}` : '';
  }
  return '';
}

const fetchData = async (req) => {
  const baseUrl = getBaseUrl(req);
  const resp = await fetch(`${baseUrl}/api`);
  const xml = await resp.text();
  results = await parsePromise(xml);
  createMap(results, mappedEntries);
}

export const fetchAll = async (req) => {
  if (results) {
    fetchData(req);
  } else {
    await fetchData(req);
  }
  return results.rss;
}

export const fetchEntry = async (id: string, req) => {
  await fetchAll(req);
  return { item: mappedEntries.get(id) };
}
