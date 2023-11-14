// icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useCartContext } from "../context/cart.Context";

const CartItems = () => {
  const { cartData, itemQuantity } = useCartContext();
  return (
    <div>
      {cartData.map((item, index) => {
        const { id, title, img, price, amount } = item;
        return (
          <div key={index} className="p-5 border-b border-gray-400">
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
                </span>
              </span>
              <span className="flex flex-col items-center">
                <IoIosArrowUp
                  className="cursor-pointer hover:scale-150 text-gray-400"
                  onClick={() => itemQuantity(id, amount + 1)}
                />
                {amount}
                <IoIosArrowDown
                  className="cursor-pointer hover:scale-150 text-gray-400"
                  onClick={() =>
                    amount === 0 ? remove(id) : itemQuantity(id, amount - 1)
                  }
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
