import { h } from "preact";

import Section from "./Section.tsx";

const SectionList = ({ data }: { data: { sections: [] } }) => {
  return (
    <ul style="list-style: none;padding: 0;">
      {data?.sections?.map((section) => (
        <li style="margin-top: 50px;">
          <Section {...section} />
        </li>
      ))}
    </ul>
  )
}

export default SectionList;
