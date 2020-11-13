import { html } from 'htm/preact';
import css from 'csz';

const titleCss = css`
  &:before {
    content: '≠';
    margin-right: 9px;
  }
  font-size: 26px;
  font-family: var(--font-family-space-mono);
  letter-spacing: 0;
  margin: 0;
`;

const Title = ({ content }) => html`
  <h1 class=${titleCss}>
    ${content}
  </h1>
`;

export default Title;
