import { html } from 'htm/preact';
import css from 'csz';

import Title from './Title.js';

const headerCss = css`
  display: flex;
  justify-content: center;
  padding: 0 8px;
  width: 100%;

  @media (min-width: 576px) {
    & {
      justify-content: space-between;
      padding: 45px 8px;
    }
  }
`;

const Header = ({ title }) => html`
  <header class=${headerCss}>
    <${Title} content=${title} />
  </header>
`;

export default Header;
