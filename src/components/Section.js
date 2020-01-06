import { html } from '/web_modules/htm/preact.js';

import ItemList from './ItemList.js';

function Section({ title, list }) {
  return html`
    <section>
      <h2>${title}</h2>
      <${ItemList} list=${list} />
    </section>
  `;
}

export default Section;
