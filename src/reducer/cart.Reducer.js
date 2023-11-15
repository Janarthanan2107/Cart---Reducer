// reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cartData: [] };
        case "REMOVE_CART_ITEM":
            const remaining = state.cartData.filter((item) => item.id !== action.payload);
            return { ...state, cartData: remaining };
        case "INCREMENT":
            const incrementItems = state.cartData.map((item) => item.id === action.payload ? { ...item, amount: item.amount + 1 } : item);
            return { ...state, cartData: incrementItems };
        case "DECREMENT":
            const decrementItems = state.cartData.map((item) => item.id === action.payload ? { ...item, amount: item.amount - 1 } : item).filter((item) => item.amount >= 1);
            return { ...state, cartData: decrementItems }
        case "CALCULATE_TOTALS":
            const calculateTotalAmount = state.cartData.reduce((acc, item) => acc + item.amount, 0);
            const calculateTotalPrice = state.cartData.reduce((acc, item) => acc + item.price * item.amount, 0)
                .toFixed(2);
            return { ...state, totalAmount: calculateTotalAmount, totalPrice: calculateTotalPrice }

        default:
            return { ...state }
    }
};

export { cartReducer }
