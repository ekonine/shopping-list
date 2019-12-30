import React from 'react';
import ItemEntry from './ItemEntry.js'

const ItemEntryList = ({ items, itemClicked }) => {
  return(
    items.map((item, i) => {
      return (
        <ItemEntry 
          key={i}
          id={i}
          item={items[i]}
          itemClicked={itemClicked}
        />        
      );
    })
  );
}

export default ItemEntryList;