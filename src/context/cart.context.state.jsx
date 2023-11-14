// basic functions for context
import { createContext, useState, useContext, useEffect } from "react";
import { cartListItems } from "../constants";

// create the context
const CartContext = createContext();

// create the context provider
const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState(cartListItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  //   clear all
  const clearCart = () => {
    setCartData([]);
  };

  // quantity
  const increment = (id) => {
    setCartData(
      cartData.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };
  
  const decrement = (id) => {
    setCartData(
      cartData.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      )
    );
  };

  // remove the item from list
  const remove = (id) => {
    setCartData(cartData.filter((item) => id !== item.id));
  };

  //   calculate total
  const calculateTotal = () => {
    setTotalAmount(cartData.reduce((acc, item) => acc + item.amount, 0));

    setTotalPrice(
      cartData
        .reduce((acc, item) => acc + item.price * item.amount, 0)
        .toFixed(2)
    );
  };

  // update the total amount every time card data updates
  useEffect(() => {
    calculateTotal();
  }, [cartData]);

  //   assign the values
  const values = {
    cartData,
    totalPrice,
    totalAmount,
    remove,
    increment,
    decrement,
    clearCart,
  };

  return (
    // pass the values
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  );
};

// custom hooks
const useCartContext = () => {
  // note: custom hook is a function so we need to return the useContext
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
