import React from 'react';

const ItemEntry = ({ item, itemClicked, id }) => {
  return (
    <div className="tc bg-near-white">
      <li id={id} onClick={itemClicked}>{item}</li>
    </div>
  );
}

export default ItemEntry;