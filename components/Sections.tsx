import SectionList from "./SectionList.tsx";

function Sections({ sections = [] }) {
  return <SectionList data={sections} />;
}

export default Sections;
