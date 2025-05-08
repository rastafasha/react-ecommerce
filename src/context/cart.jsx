import { createContext, useReducer} from "react";
import {cartReducer, cartInitialState} from '../reducers/cart';

export const CartContext = createContext();

function useCartReducer(){
    const [state, dispatch] =useReducer(cartReducer, cartInitialState);
    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    });
    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    });
    const clearCart = () =>dispatch({
        type: 'CLEAR_CART'
    });
    return {state, addToCart, removeFromCart, clearCart};

}


//testeando que el reducer funcione
// expect (
//     reducer([], {type:'ADD_TO_CART', payload: {id:1}})
// ).toEqual([{id:1, quantity: 1}])

export function CartProvider({ children }) {
    // const [cart, setCart] = useState([]);
    const {state,addToCart,removeFromCart,clearCart} = useCartReducer();

    return (
        <CartContext.Provider value={
            {
                cart:state, addToCart,clearCart, removeFromCart
            }
        }>
            {children}
        </CartContext.Provider>
    )
}