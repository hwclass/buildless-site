import { h } from "preact";

// import Error from './Error.tsx';
// import Loading from './Loading.tsx';

const tools = [
  {
    title: "deno",
    link: "https://deno.land/",
  },
  {
    title: "fresh",
    link: "https://fresh.deno.dev/",
  },
  {
    title: "preact",
    link: "https://preactjs.com/",
  },
  {
    title: "svg backgrounds",
    link: "https://www.svgbackgrounds.com",
  },
];

const Footer = () => {
  return (
    <footer>
      <p class="noSpace">The tools we used to build this application:</p>
      <p class="noSpace tools">
        <ul class="linkList">
          {tools.map((tool) => (
            <li class="linkItem">
              <a
                href={tool.link}
                class="link"
                target="_blank"
                rel="noopener"
              >
                {tool.title}
              </a>
            </li>
          ))}
        </ul>
      </p>
      <p class="noSpace">
        Feel free to contribute with links to{" "}
        <a
          href="https://www.github.com/hwclass/awesome-buildless"
          target="_blank"
          rel="noopener"
        >
          awesome-buildless
        </a>
        .
      </p>
      <p class="noSpace">
        Made with ❤ by{" "}
        <a
          href="https://www.github.com/hwclass"
          target="_blank"
          rel="noopener"
        >
          hwclass
        </a>{" "}
        &{" "}
        <a href="https://www.github.com/Kjaer" target="_blank" rel="noopener">
          kjaer
        </a>{" "}
        without using a bundler.
      </p>
    </footer>
  );
};

export default Footer;
