import { html } from '/web_modules/htm/preact.js';
import css from '/web_modules/csz.js';

import Title from './Title.js';

const headerCss = css`
  display: flex;
  justify-content: space-between;
  padding: 45px 8px;
`;

const Header = ({ title }) => html`
  <header class=${headerCss}>
    <${Title} content=${title} />
  </header>
`;

export default Header;