import { render } from '/web_modules/preact.js';
import { html } from '/web_modules/htm/preact.js';
import { withFetch } from '/web_modules/preact-fetch.js';

import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Sections from './components/Sections.js';
import Footer from './components/Footer.js';

// TIP: Needed to be defined for mapping props with preact-fetch
function mapDataToProps(data) {
  return {
    entries: data
  };
}

const url = '/api/sections';
const Client = withFetch(url, { mapDataToProps })(Sections);

render(
  html`
    <${Header} title="buildless.site" />
    <${Hero} />
    <${Client} />
    <${Footer} />
  `,
  document.querySelector('main')
);
