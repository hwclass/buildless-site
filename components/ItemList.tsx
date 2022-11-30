import { h } from "preact";

import Item from "./Item.tsx";

const ItemList = ({ list }) => list.map((item) => <Item {...item} />);

export default ItemList;
