import { render } from '/web_modules/preact.js';
import { html } from '/web_modules/htm/preact.js';
import { withFetch } from '/web_modules/preact-fetch.js';

// import Loading from './components/Loading.js';

import css from '/web_modules/csz.js';

const Loading = () => html`
  <img
    src="static/hourglass.gif"
    width="50"
    height="50"
    alt="loading..."
    class=${css`
      margin: 50px auto 0;
      display: block;
    `}
  />
`;

const Heading = () => html`
  <h1>buildless.site</h1>
`;

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

function Sites({ ...data }) {
  if (!Array.isArray(data.entries)) {
    return html`
      <${Loading} />
    `;
  }

  return html`
    <${Heading} />
    <ul>
      ${data.entries.map(
        item =>
          html`
            <${Site} ...${item} />
          `
      )}
    </ul>
  `;
}

function mapDataToProps(data) {
  return {
    entries: data
  };
}

const url = '/api';
const BuildlessApp = withFetch(url, { mapDataToProps })(Sites);

render(
  html`
    <${BuildlessApp} />
  `,
  document.querySelector('#app')
);
