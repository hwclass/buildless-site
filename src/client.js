import { render } from '/web_modules/preact.js';
import { html } from '/web_modules/htm/preact.js';
import { withFetch } from '/web_modules/preact-fetch.js';

import Loading from './components/Loading.js';
import Heading from './components/Heading.js';

function Item({ content, href }) {
  return html`
    <li>
      <article>
        <a href=${href} target="_blank">${content}</a>
      </article>
    </li>
  `;
}

function ItemList({ list }) {
  return html`
    ${list.map(
      item =>
        html`
          <ul>
            <${Item} ...${item} />
          </ul>
        `
    )}
  `;
}

function Section({ title, list }) {
  return html`
    <section>
      <h2>${title}</h2>
      <${ItemList} list=${list} />
    </section>
  `;
}

function SectionList({ data }) {
  return html`
    <ul>
      ${data.sections.map(
        section =>
          html`
            <li>
              <${Section} ...${section} />
            </li>
          `
      )}
    </ul>
  `;
}

function Sections({ asyncState, ...entries }) {
  if (asyncState !== 'resolved' && !Array.isArray(entries.entries)) {
    return html`
      <${Loading} />
    `;
  } else {
    return html`
      <${Heading} content="buildless.site" />
      <${SectionList} data=${entries.entries} />
    `;
  }
}

// TIP: Needed to be defined for mapping props with preact-fetch
function mapDataToProps(data) {
  return {
    entries: data
  };
}

const url = '/api/contents';
const Client = withFetch(url, { mapDataToProps })(Sections);

render(
  html`
    <${Client} />
  `,
  document.querySelector('#app')
);
