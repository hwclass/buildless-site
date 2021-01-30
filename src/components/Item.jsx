import { h } from 'preact';
import css from 'csz';

const listItemCss = css`
  text-align: center;
`;

const itemCss = css`
  color: #111111;
  font-size: var(--font-size-large);
  line-height: 80px;
  padding: 0 var(--margin);
`;

const Item = ({ content, href }) => (
  <li class={listItemCss}>
    <article>
      <a href={href} target="_blank" class={itemCss} rel="noopener">
        {content}
      </a>
    </article>
  </li>
);

export default Item;
