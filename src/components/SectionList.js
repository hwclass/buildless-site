import { html } from 'htm/preact';
import css from 'csz';

import Section from './Section.js';

function SectionList({ data }) {
  return html`
    <ul
      class=${css`
        list-style: none;
        padding: 0;
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
          `,
      )}
    </ul>
  `;
}

export default SectionList;
