import { useDispatch } from "react-redux";
import { IMAGE_CDN_URL } from "../utils/constants";
import { addItemToCart } from "../utils/reduxStore/storeSlices/cartSlice";

const ItemCard = ({ card }) => {
  const dispatch = useDispatch();
  const handleAddEvent = (card) => {
    dispatch(addItemToCart(card));
  };

  return (
    <div className="itemcard-container border-b-2 border-gray-400 m-2 p-2 flex justify-between">
      <div className="itemcard-details text-left w-9/12">
        <p className="font-md">{card?.card?.info.isVeg ? "🟢" : "🔺"}</p>
        <span className="font-bold text-md">{card?.card?.info.name}</span>
        <p className="my-1 italic">
          ₹
          {card?.card?.info.price
            ? card?.card?.info?.price / 100
            : card?.card?.info?.defaultPrice / 100}
        </p>
        <p className="text-xs">{card?.card?.info?.description}</p>
      </div>
      <div className="itemcard-image w-3/12 flex flex-col relative">
        <img
          className="rounded-xl"
          src={IMAGE_CDN_URL + card?.card?.info?.imageId}
        ></img>
        <button
          className="border border-solid border-white bg-slate-500 text-white rounded-md absolute w-20 p-1 bottom-4 left-10 mt-2"
          onClick={() => handleAddEvent(card)}
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
