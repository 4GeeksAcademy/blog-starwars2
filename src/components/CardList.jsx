import React from "react";
import ItemCard from "./ItemCard";

const CardList = ({ items, type }) => {
  return (
    <div className="d-flex overflow-auto py-2">
      {items.map(it => (
        <ItemCard key={it.uid} item={it} type={type} />
      ))}
    </div>
  );
};

export default CardList;
