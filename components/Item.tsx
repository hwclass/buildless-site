import { h } from "preact";

const Item = ({ content, href }) => (
  <li class="listItem">
    <article>
      <a href={href} target="_blank" class="item" rel="noopener">
        {content}
      </a>
    </article>
  </li>
);

export default Item;
