const express = require('express');
const next = require('next');
const fetch = require('isomorphic-unfetch');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/api', (req, res) => {
      fetch('https://feeds.soundcloud.com/users/soundcloud:users:306408165/sounds.rss', {
        mode: 'no-cors'
      })
      .then(data => data.text())
      .then(text => {
        res.send(text);
      })
    });

    server.get('/podcast/:id', (req, res) => {
      const actualPage = '/podcast';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  });
