import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const linkCss = css`
  background: #0eed82;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  font-family: var(--font-family-inter);
  font-weight: bold;
  letter-spacing: var(--letter-spacing);
  line-height: var(--body-line);
  padding: 20px 45px;
  text-decoration: none;
  text-transform: uppercase;
  width: auto;
`;

const HREF = 'https://glitch.com/~buildless-boilerplate';

const Link = ({ caption, href = HREF, target = '_blank' }) => html`
  <a href=${href} target=${target} class=${linkCss} rel="noopener">
    ${caption}
  </button>
`;

export default Link;
