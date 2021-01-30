import { h } from 'preact';
import css from 'csz';

import Title from './Title';

const headerCss = css`
  display: flex;
  justify-content: center;
  padding: 10px 8px;
  width: 100%;

  @media (min-width: 576px) {
    & {
      justify-content: space-between;
      padding: 45px 8px;
    }
  }
`;

const Header = ({ title }) => (
  <header class={headerCss}>
    <Title content={title} />
  </header>
);

export default Header;
