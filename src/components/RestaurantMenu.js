import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuList from "./MenuList";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchAndSetRestaurantInfo();
  }, []);

  const { resId } = useParams();

  const fetchAndSetRestaurantInfo = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage } =
    resInfo?.cards[0].card.card.info;

  const { cards } = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR;

  return (
    <div className="menu-container">
      <h2>{name}</h2>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwoMessage}</h4>
      <h3>Menu</h3>
      {cards.map((card) => {
        return <MenuList cardInfo={card} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
