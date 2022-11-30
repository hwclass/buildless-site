import { h } from "preact";

import Section from "./Section.tsx";

const SectionList = ({ data = [] }) => (
  <ul style="list-style: none;padding: 0;">
    {data.map((section) => (
      <li style="margin-top: 50px;">
        <Section {...section} />
      </li>
    ))}
  </ul>
);

export default SectionList;
