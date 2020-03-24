const https = require('https');
const marked = require('marked');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const readmeUrl =
  'https://raw.githubusercontent.com/hwclass/awesome-buildless/master/README.md';

const headingIds = {
  articles: 'articles',
  tutorials: 'tutorials',
  platforms: 'tools--platforms',
  libraries: 'packages--libraries',
  videos: 'videos'
};

export default (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  const getTitle = (dom, id) => {
    let title = dom.window.document.getElementById(id).innerHTML;
    title = title.replace(/&amp;/g, '&');
    return title;
  };

  const getList = (dom, id) => {
    const links = [];
    const linkCollection = Array.from(
      dom.window.document.querySelectorAll(`#${id} + ul li`)
    ).map(link => link.children);
    for (let item of linkCollection) {
      Array.from(item).map(item => {
        links.push({
          content: item.innerHTML,
          href: item.href
        });
      });
    }

    return links;
  };

  const getSection = (id, dom) => ({
    title: getTitle(dom, id),
    list: getList(dom, id)
  });

  const getSections = dom => {
    const articles = getSection(headingIds.articles, dom);
    const tutorials = getSection(headingIds.tutorials, dom);
    const platforms = getSection(headingIds.platforms, dom);
    const libraries = getSection(headingIds.libraries, dom);
    const videos = getSection(headingIds.videos, dom);

    return [
      { ...articles },
      { ...tutorials },
      { ...platforms },
      { ...libraries },
      { ...videos }
    ];
  };

  https.get(readmeUrl, resp => {
    let data = '';
    resp.on('data', chunk => {
      data += chunk;
    });

    resp.on('end', () => {
      const html = marked(data);

      const dom = new JSDOM(html);

      const sections = getSections(dom);

      const structuredDoc = {
        sections
      };

      res.json(structuredDoc);
    });
  });
};
