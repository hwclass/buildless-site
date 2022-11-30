import Loading from "./Loading.tsx";
import SectionList from "./SectionList.tsx";
import Error from "./Error.tsx";

function Sections({ asyncState, sections = [] }) {
  if (asyncState === "error") {
    return <Error content="Data is not available now. Please try again." />;
  } else if (asyncState !== "resolved" && !Array.isArray(sections)) {
    return <Loading />;
  } else {
    return <SectionList data={sections} />;
  }
}

export default Sections;
