// icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// use context
import { useCartContext } from "../context/cart.Context";

const CartItems = () => {
  // destructure the data from context
  const { cartData, increment, decrement, remove } = useCartContext();
  return (
    <div>
      {cartData.map((item) => {
        const { id, title, img, price, amount } = item;
        return (
          <div key={id} className="p-5 border-b border-gray-400">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-3">
                <img
                  src={img}
                  alt={title}
                  className="h-[80px] w-[100px] rounded-md shadow-lg"
                />
                <span>
                  <p className="text-[1rem] font-semibold capitalize">
                    {title}
                  </p>
                  <p className="text-gray-400">Price: ${price}</p>
                  <p
                    className="text-gray-600 cursor-pointer text-xs"
                    onClick={() => remove(id)}
                  >
                    Remove
                  </p>
                </span>
              </span>
              <span className="flex flex-col items-center">
                <IoIosArrowUp
                  className="cursor-pointer hover:scale-150 text-gray-400"
                  onClick={() => increment(id)}
                />
                {amount}
                <IoIosArrowDown
                  className="cursor-pointer hover:scale-150 text-gray-400"
                  onClick={() => decrement(id)}
                />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
