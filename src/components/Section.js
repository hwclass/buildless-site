import { html } from 'htm/preact';
import css from 'csz';

import ItemList from './ItemList.js';

const itemListCss = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function Section({ title, list }) {
  return html`
    <section>
      <h2
        class=${css`
          &:before {
            content: '≠';
            font-family: var(--font-family-inter);
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
      <ul class=${itemListCss}>
        <${ItemList} list=${list} />
      </ul>
    </section>
  `;
}

export default Section;
