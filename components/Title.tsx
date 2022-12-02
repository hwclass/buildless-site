import { h } from "preact";

const Title = ({ content }) => (
  <h1 class="header-title">
    <a href="/">
      {content}
    </a>
  </h1>
);

export default Title;
