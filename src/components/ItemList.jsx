import { h } from 'preact';

import Item from './Item';

const ItemList = ({ list }) => list.map((item) => <Item {...item} />);

export default ItemList;
