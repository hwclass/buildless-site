import { h } from "preact";

import ItemList from "./ItemList.tsx";

const Section = ({ title, list }) => (
  <section>
    <h2 class="sectionHeading">
      {title}
    </h2>
    <ul class="itemList">
      <ItemList list={list} />
    </ul>
  </section>
);

export default Section;
