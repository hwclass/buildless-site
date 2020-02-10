import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

import ItemList from './ItemList.js';

function Section({ title, list }) {
  return html`
    <section>
      <h2
        class=${css`
          &:before {
            content: '≠';
            font-family: var(--font-family-sans-serif);
            font-size: 118px;
            opacity: 0.3;
            position: absolute;
            left: 15px;
            top: 0px;
            line-height: 65%;
          }
          position: relative;
          padding: 20px 20px 20px 45px;
          background-color: var(--color-green);
          font-family: var(--font-family-space-mono);
          color: white;
          font-size: 36px;
        `}
      >
        ${title}
      </h2>
      <${ItemList} list=${list} />
    </section>
  `;
}

export default Section;
