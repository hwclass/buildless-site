import { render } from '/web_modules/preact.js';
import { html } from '/web_modules/htm/preact.js';
import { withFetch } from '/web_modules/preact-fetch.js';

import Heading from './components/Heading.js';
import Sections from './components/Sections.js';

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
    <${Heading} content="buildless.site" />
    <${Client} />
  `,
  document.querySelector('#app')
);
