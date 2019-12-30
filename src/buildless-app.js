import { render } from "/web_modules/preact.js";
import { html } from "/web_modules/htm/preact.js";
import { withFetch } from "/web_modules/preact-fetch.js";

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

function Repos({ ...data }) {
  if (!Array.isArray(data.entries)) {
    return html`
      <img
        src="static/hourglass.gif"
        width="50"
        height="50"
        alt="loading..."
        class="loading"
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

const url = "/api";
const BuildlessApp = withFetch(url, { mapDataToProps })(Repos);

render(
  html`
    <${BuildlessApp} />
  `,
  document.querySelector("#app")
);
