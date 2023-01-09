import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context'; 


import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                <CartItem key={ item.id } cartItem={item} />
                ))}           
                 </div>
        <Button>Proceed to checkout</Button>
        </div>

    )
}


export default CartDropDown;