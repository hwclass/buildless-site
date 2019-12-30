import { h, render } from "/static/web_modules/preact.js";
import htm from "/static/web_modules/htm.js";
import { withFetch } from "/static/web_modules/preact-fetch.js";

const html = htm.bind(h);

const Heading = () => html`
  <h1>buildless.site</h1>
`;

function RepoStars({ full_name, html_url, stargazers_count }) {
  return html`
    <div>
      <a href=${html_url}
        >${full_name} 🌟<strong>${stargazers_count}</strong></a
      >
    </div>
  `;
}

function Site({ title, description, url }) {
  return html`
    <div>
      <a href=${url}><strong>${title}</strong> ${description}</a>
    </div>
  `;
}

function Repos({ items = [] }) {
  if (!items) {
    return html`
      Loading...
    `;
  }
  return html`
    <div>
      <${Heading} />
      <ul>
        ${items.map(
          repo =>
            html`
              <${RepoStars} ...${repo} />
            `
        )}
      </ul>
    </div>
  `;
}

function Sites({ sites = [] }) {
  console.log(sites);
  return html`
    <div>
      <${Heading} />
      <ul>
        ${sites.map(
          site =>
            html`
              <${Site} ...${site} />
            `
        )}
      </ul>
    </div>
  `;
}

const url = props => `/api`;
const BuildlessApp = withFetch(url)(Sites);

render(
  html`
    <${BuildlessApp} />
  `,
  document.querySelector("#app")
);
