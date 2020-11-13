import { render } from 'preact';
import { html } from 'htm/preact';
import { withFetch } from 'preact-fetch';

import Header from './components/Header.js';
import Hero from './components/Hero.js';
import EmbedCode from './components/EmbedCode.js';
import Manifesto from './components/Manifesto.js';
import Boilerplates from './components/Boilerplates.js';
import Sections from './components/Sections.js';
import Footer from './components/Footer.js';

// TIP: Needed to be defined for mapping props with preact-fetch
function mapDataToProps(data) {
  return {
    entries: data,
  };
}

const url = import.meta.env.SNOWPACK_PUBLIC_API_SECTION;
const Client = withFetch(url, { mapDataToProps })(Sections);

render(
  html`
    <${Header} title="buildless.site" />
    <${Hero} />
    <${EmbedCode} />
    <${Manifesto} />
    <${Boilerplates} />
    <${Client} />
    <${Footer} />
  `,
  document.querySelector('main'),
);
