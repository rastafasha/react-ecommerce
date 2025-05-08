import{useId} from 'react';
import { CartIcon, ClearCartIcon} from './icons';
import {useCart} from '../hooks/useCart';
import './Cart.css';

function CartItem({thumbnail, price, title, quantity, addToCart}){
    return(
        <li>
            <img src={thumbnail} alt={title}  />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small >
                    Qty:{quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )

}
export function Cart(){
    const cartCheckboxId = useId();
    const {clearCart, cart, addToCart }= useCart();

    return (
        <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <CartIcon></CartIcon>
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden />
        <aside className='cart'>
            <ul>
                {cart.map((product, index) =>(
                    <CartItem 
                    key={`${product.id}-${index}`} 
                    thumbnail={product.thumbnail}
                    addToCart={()=>addToCart(product)}
                    {...product}
                    />
                ))}
            </ul>
            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )

}