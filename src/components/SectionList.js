import { html } from '/web_modules/htm/preact.js';

import Section from './Section.js';

function SectionList({ data }) {
  return html`
    <ul>
      ${data.map(
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

export default SectionList;
