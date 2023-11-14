import CartItems from "./cartItems.Component";

const Cart = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-8rem)] bg-slate-100">
      <div className="">
        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
