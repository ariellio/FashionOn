import React from 'react';
import { Link } from "react-router-dom";
import ItemIndexItem from './item_index_item';





function ItemIndex({items}) {
    return (
            <div className="itemIndex__container">    
                {items.map( item => <ItemIndexItem key={item.id} item={item} />)}
            </div>
    )
}

export default ItemIndex;


