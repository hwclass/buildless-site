import { html } from '/web_modules/htm/preact.js';

import Item from './Item.js';

function ItemList({ list }) {
  return html`
    ${list.map(
      item =>
        html`
          <${Item} ...${item} />
        `
    )}
  `;
}

export default ItemList;
