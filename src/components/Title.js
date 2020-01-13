import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

const titleCss = css`
  &:before {
    content: '≠';
    margin-right: 9px;
  }
  font-size: 26px;
  font-family: var(--font-family-space-mono-bold);
  letter-spacing: 0;
  margin: 0;
`;

const Title = ({ content }) => html`
  <h1 class=${titleCss}>
    ${content}
  </h1>
`;

export default Title;
