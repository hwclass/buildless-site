import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const itemCss = css`
  color: #111111;
  font-size: 30px;
`;

function Item({ content, href }) {
  return html`
    <li>
      <article>
        <a href=${href} target="_blank" rel="noopener" class=${itemCss}
          >${content}</a
        >
      </article>
    </li>
  `;
}

export default Item;
