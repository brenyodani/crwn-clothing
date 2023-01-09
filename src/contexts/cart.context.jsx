import { createContext, useState } from 'react';


const addCartItem = (cartItems, productToAdd) => {
    // eloszor van e mar a kosarunkban ez a product
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //ha van akkor cska a mennyiseget valtoztatom
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
    {
        ...cartItem,quantity: cartItem.quantity +1
    } : cartItem);
    }
    // frissitem hogy mi mennyi 
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems};


    return <CartContext.Provider value={ value }>{children}</CartContext.Provider>
}