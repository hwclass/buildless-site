import { html } from 'htm/preact';
import css from 'csz';

const footerCss = css`
  background: #0eed82;
  border: 0;
  color: var(--color-white);
  cursor: pointer;
  font-size: 14px;
  font-family: var(--font-family-inter);
  letter-spacing: var(--letter-spacing);
  line-height: var(--body-line);
  padding: 20px 20px;
  text-decoration: none;
  width: auto;
`;

const noSpace = css`
  padding: 0;
  margin: 0;
`;

const toolsCss = css`
  margin: var(--margin) 0;
  font-size: var(--font-size-medium);
`;

const linkListCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const linkItemCss = css`
  font-family: var(--font-family-inter-semi-bold);
  font-size: var(--font-size-default);
`;

const linkCss = css`
  color: var(--color-white);
`;

const tools = [
  {
    title: 'browserslist',
    link: 'https://github.com/browserslist/browserslist',
  },
  {
    title: 'csz',
    link: 'https://github.com/lukejacksonn/csz',
  },
  {
    title: 'htm',
    link: 'https://github.com/developit/htm',
  },
  {
    title: 'husky',
    link: 'https://github.com/typicode/husky',
  },
  {
    title: 'zeit now',
    link: 'https://zeit.co/',
  },
  {
    title: 'snowpack',
    link: 'https://www.snowpack.dev/',
  },
  {
    title: 'preact',
    link: 'https://preactjs.com/',
  },
  {
    title: 'preact-fetch',
    link: 'https://www.pika.dev/npm/preact-fetch',
  },
  {
    title: 'prettier',
    link: 'https://prettier.io/',
  },
  {
    title: 'pretty-quick',
    link: 'https://www.npmjs.com/package/pretty-quick',
  },
  {
    title: 'svg backgrounds',
    link: 'https://www.svgbackgrounds.com',
  },
];

const Footer = () => html`
  <footer class=${footerCss}>
    <p class=${noSpace}>The tools we used to build this application:</p>
    <p class=${(noSpace, toolsCss)}>
      <ul class=${linkListCss}>
        ${tools.map(
          tool => html`
            <li class=${linkItemCss}>
              <a
                href=${tool.link}
                class=${linkCss}
                target="_blank"
                rel="noopener"
              >
                ${tool.title}
              </a>
            </li>
          `,
        )} 
      </ul>
    </p>
    <p class=${noSpace}>Feel free to contribute with links to <a href="https://www.github.com/hwclass/awesome-buildless" target="_blank" rel="noopener">awesome-buildless</a>.</p>
    <p class=${noSpace}>Made with ❤ by <a href="https://www.github.com/hwclass" target="_blank" rel="noopener">hwclass</a> & <a href="https://www.github.com/Kjaer" target="_blank" rel="noopener">kjaer</a> without using a bundler.</p>
  </footer>
`;

export default Footer;
