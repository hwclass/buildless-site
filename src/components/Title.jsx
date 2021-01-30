import { h } from 'preact';
import css from 'csz';

const titleCss = css`
  &:before {
    content: '≠';
    margin-right: var(--margin);
  }
  font-size: var(--font-size-large);
  font-family: var(--font-family-space-mono);
  letter-spacing: 0;
  margin: 0;
`;

const Title = ({ content }) => <h1 class={titleCss}>{content}</h1>;

export default Title;
