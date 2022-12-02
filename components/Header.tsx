import { h } from "preact";

import Title from "./Title.tsx";

const Header = ({ title }) => {
  return (
    <header>
      <Title content={title} />
      <ul style={'display: flex; flex-direction: row; align-items: center;'}>
        <li style={'padding: 0 50px;'}>
          <a href="/blog">
            Blog
          </a>
        </li>
        <li>
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
