import { h } from 'preact';
import css from 'csz';

import Error from './Error';
import Loading from './Loading';

const footerCss = css`
  background: var(--color-green);
  border: 0;
  color: var(--color-white);
  cursor: pointer;
  font-size: var(--font-size-tiny);
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

const Footer = ({ asyncState, tools = [] }) => {
  if (asyncState === 'error') {
    return <Error content="Data is not available now. Please try again." />;
  } else if (asyncState !== 'resolved' && !Array.isArray(tools)) {
    return <Loading />;
  } else {
    return (
      <footer class={footerCss}>
        <p class={noSpace}>The tools we used to build this application:</p>
        <p class={(noSpace, toolsCss)}>
          <ul class={linkListCss}>
            {tools.map((tool) => (
              <li class={linkItemCss}>
                <a
                  href={tool.link}
                  class={linkCss}
                  target="_blank"
                  rel="noopener"
                >
                  {tool.title}
                </a>
              </li>
            ))}
          </ul>
        </p>
        <p class={noSpace}>
          Feel free to contribute with links to{' '}
          <a
            href="https://www.github.com/hwclass/awesome-buildless"
            target="_blank"
            rel="noopener"
          >
            awesome-buildless
          </a>
          .
        </p>
        <p class={noSpace}>
          Made with ❤ by{' '}
          <a
            href="https://www.github.com/hwclass"
            target="_blank"
            rel="noopener"
          >
            hwclass
          </a>{' '}
          &{' '}
          <a href="https://www.github.com/Kjaer" target="_blank" rel="noopener">
            kjaer
          </a>{' '}
          without using a bundler.
        </p>
      </footer>
    );
  }
};

export default Footer;
