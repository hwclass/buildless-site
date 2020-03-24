import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const buttonCss = css`
  background: #0eed82;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  font-family: var(--font-family-inter-bold);
  font-weight: bold;
  letter-spacing: var(--letter-spacing);
  line-height: var(--body-line);
  padding: 20px 45px;
  text-decoration: none;
  text-transform: uppercase;
  width: auto;
`;

const Button = ({ caption }) => html`
  <button class=${buttonCss}>
    ${caption}
  </button>
`;

export default Button;
