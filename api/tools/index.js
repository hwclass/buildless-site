const https = require('https');
const Cors = require('cors');

const initMiddleware = require('../../lib/initMiddleware');

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  }),
);

const tools = [
  {
    title: 'browserslist',
    link: 'https://github.com/browserslist/browserslist',
  },
  {
    title: 'csz',
    link: 'https://github.com/lukejacksonn/csz',
  },
  {
    title: 'htm',
    link: 'https://github.com/developit/htm',
  },
  {
    title: 'husky',
    link: 'https://github.com/typicode/husky',
  },
  {
    title: 'zeit now',
    link: 'https://zeit.co/',
  },
  {
    title: 'snowpack',
    link: 'https://www.snowpack.dev/',
  },
  {
    title: 'preact',
    link: 'https://preactjs.com/',
  },
  {
    title: 'preact-fetch',
    link: 'https://www.pika.dev/npm/preact-fetch',
  },
  {
    title: 'prettier',
    link: 'https://prettier.io/',
  },
  {
    title: 'pretty-quick',
    link: 'https://www.npmjs.com/package/pretty-quick',
  },
  {
    title: 'svg backgrounds',
    link: 'https://www.svgbackgrounds.com',
  },
];

module.exports = async function (req, res) {
  await cors(req, res);

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  res.json(tools);
};
