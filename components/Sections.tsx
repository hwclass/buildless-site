import SectionList from "./SectionList.tsx";

function Sections({ sections = [] }) {
  console.log(`Sections:sections, ${JSON.stringify(sections.sections)}`)
  return <SectionList data={sections} />;
}

export default Sections;
