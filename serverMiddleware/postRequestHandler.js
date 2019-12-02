const querystring = require('querystring');

export default {
  async asyncData(req, res, next) {

    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      req.body = querystring.parse(body) || {};
      next();
    });

  }
}
