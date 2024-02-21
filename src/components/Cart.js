import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <div className="cart-container w-6/12 m-auto text-center">
      <h1 className="text-3xl font-bold m-4 p-4">Cart</h1>
      <button className="border border-solid border-black p-1 rounded-lg w-3/12 hover:shadow-lg hover:cursor-pointer">
        Clear Cart
      </button>
      <div className="items-container mt-12">
        {cartItems.map((card) => (
          <ItemCard card={card} key={card.card.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
