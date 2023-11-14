// icons
import { BsBagHeart } from "react-icons/bs";
import { useCartContext } from "../context/cart.Context";

const Navbar = () => {

  const {totalAmount} = useCartContext()

  return (
    <div>
      <div className="w-full h-16 shadow-md flex justify-around items-center mx-auto px-5">
        <div className="logo flex gap-2 font-semibold">
          <img src="/vite.svg" alt="logo" />
          <h2 className="text-violet-500 text-xl">Cart - UseReducer</h2>
        </div>
        <nav className="hover:shadow-lg p-2 rounded-md text-gray-400 hover:text-violet-500 cursor-pointer relative">
          <p className="absolute top-0 right-0 p-1 border flex items-center rounded-[50%] h-4 w-4 text-gray-600 bg-violet-300 text-xs">
            {totalAmount}
          </p>
          <BsBagHeart className="w-[25px] h-[25px]" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
