import { h } from 'preact';
import css from 'csz';

import Section from './Section';

const SectionList = ({ data = [] }) => (
  <ul
    class={css`
      list-style: none;
      padding: 0;
    `}
  >
    {data.map((section) => (
      <li
        class={css`
          margin-top: 50px;
        `}
      >
        <Section {...section} />
      </li>
    ))}
  </ul>
);

export default SectionList;
