import { CartIcon,ClearCartIcon} from './icons';
import{useId} from 'react';
import './Cart.css'

export function Cart(){
    const cartCheckboxId = useId();

    return (
        <>
        <label className='cart-button' htmlFor='cart'>
            <CartIcon></CartIcon>
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden />
        <aside className='cart'>
            <ul>
                <li>
                    <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" 
                    alt="Iphone" />
                    <div>
                        <strong>iPhone</strong> - $1499
                    </div>
                    <footer>
                        <small>
                            Qty:1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon></ClearCartIcon>
            </button>
        </aside>
        </>
    )

}