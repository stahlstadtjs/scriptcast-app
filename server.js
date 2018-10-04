const { fetchRSS } = require('./server/fetchRSS');

const express = require('express');
const next = require('next');
const compression = require('compression');

const dev = process.env.NODE_ENV !== 'production';
const defaultPort = dev ? 3000 : 443;
const app = next({ dev });
const port = process.env.PORT || defaultPort;
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(compression());

    server.get('/api', fetchRSS());

    server.use('/favicon.ico', express.static('./static/icons/favicon.ico'))

    server.get('/podcast/:id', (req, res) => {
      const actualPage = '/podcast';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    });
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  });

