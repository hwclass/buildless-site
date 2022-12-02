import { h } from "preact";

import Title from "./Title.tsx";

const Header = ({ title }) => {
  return (
    <header>
      <Title content={title} />
      <ul class='menu'>
        <li class='header-title-small menuItem'>
          <a href="/blog" class="normalizedAhref">
            Blog
          </a>
        </li>
        <li class='menuItem'>
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge-dark.svg"
              alt="Made with Fresh"
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
