import { render } from "/web_modules/preact.js";
import { html } from "/web_modules/htm/preact.js";

import { withFetch } from "/web_modules/preact-fetch.js";

// const html = htm.bind(h);

const Heading = () => html`
  <h1>buildnpmless.site</h1>
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

function Repos({ asyncState, ...data }) {
  console.log(asyncState);

  if (!Array.isArray(data.entries)) {
    return html`
      <img
        src="https://icons8.com/vue-static/landings/animated-icons/icons/hourglass/hourglass.gif"
        width="50"
        height="50"
        alt="loading..."
      />
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

// const url = '/api';
const url = "https://www.mocky.io/v2/5e09f9fa3000008100244652";
const BuildlessApp = withFetch(url, { mapDataToProps })(Repos);

render(
  html`
    <${BuildlessApp} />
  `,
  document.querySelector("#app")
);
