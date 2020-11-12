import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const listItemCss = css`
  text-align: center;
`;

const itemCss = css`
  color: #111111;
  font-size: var(--font-size-large);
  line-height: 80px;
  padding: 0 var(--margin);
`;

function Item({ content, href }) {
  return html`
    <li class=${listItemCss}>
      <article>
        <a href=${href} target="_blank" class=${itemCss} rel="noopener"
          >${content}</a
        >
      </article>
    </li>
  `;
}

export default Item;
