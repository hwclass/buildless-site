import { render } from '/web_modules/preact.js';
import { html } from '/web_modules/htm/preact.js';
import { withFetch } from '/web_modules/preact-fetch.js';

import Loading from './components/Loading.js';
import Heading from './components/Heading.js';

function Site({ title, description, url }) {
  return html`
    <li>
      <a href=${url}>
        <strong>${title}: </strong>
        ${description}
      </a>
    </li>
  `;
}

function SiteList({ data }) {
  return html`
    <ul>
      ${data.map(
        item =>
          html`
            <${Site} ...${item} />
          `
      )}
    </ul>
  `;
}

function Sites({ ...data }) {
  if (!Array.isArray(data.entries)) {
    return html`
      <${Loading} />
    `;
  }

  return html`
    <${Heading} content="buildless.site" />
    <${SiteList} data=${data.entries} />
  `;
}

// TIP: Needed to be defined for mapping props with preact-fetch
function mapDataToProps(data) {
  return {
    entries: data
  };
}

const url = '/api';
const Client = withFetch(url, { mapDataToProps })(Sites);

render(
  html`
    <${Client} />
  `,
  document.querySelector('#app')
);
