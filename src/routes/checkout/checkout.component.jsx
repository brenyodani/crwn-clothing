import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';



const Checkout = () => {

    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);



return (
    <div>
        <h2>Checkout page </h2>
        <div>
            {          
                cartItems.map((cartItem)=>{
                    const { name, id, quantity } = cartItem;
                    return (
                    <div key={ id }>
                    <h2>{name}</h2>
                    <span>{quantity}</span>

                    <br />
                    <span onClick={() => removeItemToCart(cartItem)}>Decrement</span>
                    <br />
                    <span onClick={() => addItemToCart(cartItem)}>Increment</span>
                    </div>
               ); })
            }
        </div>
    </div>
);
}


export default Checkout;