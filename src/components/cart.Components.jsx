import CartItems from "./cartItems.Component";
import { useCartContext } from "../context/cart.Context";

const Cart = () => {
  const { totalPrice, clearCart } = useCartContext();

  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)] bg-slate-100">
      <div className="flex justify-between w-[550px] items-center pb-3">
        <h1 className="text-[1.2rem] font-bold">My Bag</h1>
        <button onClick={clearCart} className="py-2 px-3 bg-violet-500 text-white rounded-md">Clear All</button>
      </div>
      <div className="bg-white p-2 rounded-lg border-gray-400 w-[600px]">
        <CartItems />
      </div>
      <div className="p-2 flex justify-between w-[580px] text-gray-600 text-[1.2rem] pb-4 border-b font-semibold">
        <p>Total:</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
