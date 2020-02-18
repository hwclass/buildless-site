import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

import Section from './Section.js';

function SectionList({ data }) {
  return html`
    <ul
      class=${css`
        list-style: none;
        padding: 105px 0;
      `}
    >
      ${data.map(
        section =>
          html`
            <li
              class=${css`
                margin-top: 50px;
              `}
            >
              <${Section} ...${section} />
            </li>
          `
      )}
    </ul>
  `;
}

export default SectionList;
