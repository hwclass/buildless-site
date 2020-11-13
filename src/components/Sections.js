import { html } from 'htm/preact';

import Loading from './Loading.js';
import SectionList from './SectionList.js';
import Error from './Error.js';

function Sections({ asyncState, ...entries }) {
  if (asyncState === 'error') {
    return html`
      <${Error} content="Data is not available now. Please try again." />
    `;
  } else if (asyncState !== 'resolved' && !Array.isArray(entries.entries)) {
    return html`
      <${Loading} />
    `;
  } else {
    return html`
      <${SectionList} data=${entries.entries.sections} />
    `;
  }
}

export default Sections;
