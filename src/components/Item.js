import { html } from '/web_modules/htm/preact.js';

function Item({ content, href }) {
  return html`
    <li>
      <article>
        <a href=${href} target="_blank" rel="noopener">${content}</a>
      </article>
    </li>
  `;
}

export default Item;
