import Shimmer from "./Shimmer";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines } =
    resInfo?.cards[0].card.card.info;

  const categories =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu-container text-center">
      <h2 className="font-bold m-3 mt-10 text-2xl">{name}</h2>
      <h3 className="font-bold text-md">{cuisines.join(", ")}</h3>
      <h4 className="font-bold text-md m-2">
        {avgRating} Stars - {costForTwoMessage}
      </h4>
      {categories.map((card, index) => {
        return (
          <MenuList
            cardInfo={card}
            showMenu={index === showIndex ? true : false}
            key={self.crypto.randomUUID()}
            setShowIndex={(state) => {
              state ? setShowIndex(index) : setShowIndex(null);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
