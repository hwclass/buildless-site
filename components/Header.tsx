import { h } from "preact";

import Title from "./Title.tsx";

const Header = ({ title }) => (
  <header>
    <Title content={title} />
    <a href="https://fresh.deno.dev">
      <img
        width="197"
        height="37"
        src="https://fresh.deno.dev/fresh-badge-dark.svg"
        alt="Made with Fresh"
      />
    </a>
  </header>
);

export default Header;
