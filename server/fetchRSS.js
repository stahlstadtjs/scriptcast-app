const fetch = require('isomorphic-unfetch');

function fetchRSS() {
  return (req, res) => {
    fetch('https://feeds.soundcloud.com/users/soundcloud:users:306408165/sounds.rss', {
      mode: 'no-cors'
    })
      .then(data => data.text())
      .then(text => {
        res.send(text);
      });
  };
}
exports.fetchRSS = fetchRSS;
