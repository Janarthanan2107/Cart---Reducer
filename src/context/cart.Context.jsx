// basic functions for context
import {
    createContext,
    useReducer,
    useContext,
    useEffect,
  } from "react";
  import { cartListItems } from "../constants";
  import { cartReducer } from "../reducer/cart.Reducer";
  
  // create the context
  const CartContext = createContext();
  
  // initial values
  const initialValues = {
    cartData: cartListItems,
    totalAmount: 0,
    totalPrice: 0,
  };
  
  // create the context provider
  const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialValues);
  
    // clear all
    const clearCart = () => {
      dispatch({ type: "CLEAR_CART" });
    };
  
    // quantity
    const increment = (id) => {
      dispatch({ type: "INCREMENT", payload: id });
    };
  
    const decrement = (id) => {
      dispatch({ type: "DECREMENT", payload: id });
    };
  
    // remove the item from list
    const remove = (id) => {
      dispatch({ type: "REMOVE_CART_ITEM", payload: id });
    };
  
    //   calculate total
    const calculateTotal = () => {
      dispatch({ type: "CALCULATE_TOTALS" });
    };
  
    // update the total amount every time card data updates
    useEffect(() => {
      calculateTotal();
    }, [state.cartData]);
  
    //   assign the values
    const values = {
      ...state,
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
  