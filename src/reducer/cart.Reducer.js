// reducer
const cartReducer = (state, action) => {
    // if (action.type === "CLEAR_CART") {
    //     // clearing the cart items
    //     return { ...state, cartData: [] };
    // } else if (action.type === "REMOVE_CART_ITEM") {
    //     // clearing the single cart item using id
    //     const remaining = state.cartData.filter((item) => item.id !== action.payload);
    //     return { ...state, cartData: remaining }
    // } 

    // return { ...state };

    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cartData: [] };
        default:
            return { ...state }
    }
};

export { cartReducer }