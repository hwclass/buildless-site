import { h } from 'preact';

import Loading from './Loading';
import SectionList from './SectionList';
import Error from './Error';

function Sections({ asyncState, entries = [] }) {
  if (asyncState === 'error') {
    return <Error content="Data is not available now. Please try again." />;
  } else if (asyncState !== 'resolved' && !Array.isArray(entries.sections)) {
    return <Loading />;
  } else {
    return <SectionList data={entries.sections} />;
  }
}

export default Sections;
