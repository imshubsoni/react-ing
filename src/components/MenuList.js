import { useState } from "react";
import ItemCard from "./ItemCard";

const MenuList = (props) => {
  const itemCards = props?.cardInfo?.card?.card?.itemCards;
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="category-container w-6/12 m-auto bg-gray-200 mb-4 rounded-md p-4 shadow-md">
      <div
        className="category-header flex justify-between hover:cursor-pointer"
        onClick={() => {
          props.setShowIndex(isExpanded);
          setIsExpanded(!isExpanded);
        }}
      >
        <span className="font-bold text-xl">
          {props?.cardInfo?.card?.card?.title} - (
          {props?.cardInfo?.card?.card?.itemCards.length})
        </span>
        <span className="text-xl">🔽</span>
      </div>
      <div className="category-body">
        {props.showMenu &&
          itemCards.map((card) => (
            <ItemCard card={card} key={card?.card?.info?.id} />
          ))}
      </div>
    </div>
  );
};

export default MenuList;
