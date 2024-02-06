import Shimmer from "./Shimmer";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
