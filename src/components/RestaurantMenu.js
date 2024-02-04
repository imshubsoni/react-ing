import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuList from "./MenuList";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchAndSetRestaurantInfo();
  }, []);

  const fetchAndSetRestaurantInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9121181&lng=77.6445548&restaurantId=17036&catalog_qa=undefined&submitAction=ENTER"
    );

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
