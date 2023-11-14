import { useCartContext } from "../context/cart.Context"

const reducer = (state, action) => {
    const { amount } = useCartContext();

    if (action.type === "INCREMENT") {

    } else if (action.type === "DECREMENT") {

    } else if (action.type === "REMOVE") {

    } else {

    }
}

export { reducer }