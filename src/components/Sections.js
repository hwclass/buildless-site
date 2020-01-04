import { html } from '/web_modules/htm/preact.js';

import Loading from './Loading.js';
import Heading from './Heading.js';
import SectionList from './SectionList.js';

function Sections({ asyncState, ...entries }) {
  if (asyncState !== 'resolved' && !Array.isArray(entries.entries)) {
    return html`
      <${Loading} />
    `;
  } else {
    return html`
      <${Heading} content="buildless.site" />
      <${SectionList} data=${entries.entries.sections} />
    `;
  }
}

export default Sections;
