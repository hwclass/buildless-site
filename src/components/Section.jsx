import { h } from 'preact';
import css from 'csz';

import ItemList from './ItemList';

const itemListCss = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const Section = ({ title, list }) => (
  <section>
    <h2
      class={css`
        &:before {
          content: '≠';
          font-family: var(--font-family-inter);
          font-size: 118px;
          opacity: 0.3;
          position: absolute;
          left: 15px;
          top: 0px;
          line-height: 65%;
        }
        position: relative;
        padding: 20px 20px 20px 45px;
        background-color: var(--color-green);
        font-family: var(--font-family-space-mono);
        color: white;
        font-size: 36px;
      `}
    >
      {title}
    </h2>
    <ul class={itemListCss}>
      <ItemList list={list} />
    </ul>
  </section>
);

export default Section;
