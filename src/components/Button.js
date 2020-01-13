import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const buttonCss = css`
  background: #0eed82;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 26px;
  font-family: var(--font-family-space-mono-bold);
  line-height: var(--body-line);
  padding: var(--pico) var(--milli);
  text-decoration: none;
  width: auto;
`;

const Button = ({ caption }) => html`
  <button class=${buttonCss}>
    ${caption}
  </button>
`;

export default Button;
