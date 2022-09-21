import { createContext, useEffect, useState } from "react";
export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  export const removeCartItem = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === itemToRemove.id
    );
  
    if (existingCartItem.quantity===1) {

     return cartItems.filter((cartItem)=>cartItem.id!==itemToRemove.id)
    }
    return cartItems.map((cartItem) =>
        cartItem.id === itemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
export const clearCartItem = (cartItems , itemToClear) => cartItems.filter((cartItem)=>cartItem.id!==itemToClear.id)

export const CartContext = createContext({
    isCartOpen : false, 
    setIsCartOpen : ()=>{},
    cartItems :[],
    addItemToCart: ()=>{},
    removeItemFromCart : ()=>{},
    clearItemFromCart : ()=>{},
    cartCount:0
});

export const CartProvider =({children}) =>{
    const [isCartOpen, setIsCartOpen,] = useState(false);
    const [cartItems , setCartItems] = useState([]);
    const [cartCount , setCartCount] = useState(0);

    useEffect(()=>{
      const newCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity ,0)
       setCartCount(newCount);
    },[cartItems]);
  
    const addItemToCart =(productToAdd)=>{

      setCartItems(addCartItem(cartItems, productToAdd));
  }
  const removeItemFromCart = (itemToRemove)=>{

    setCartItems(removeCartItem(cartItems, itemToRemove));
}
const clearItemFromCart = (itemToClear)=>{

  setCartItems(clearCartItem(cartItems, itemToClear));
}
  const value = {isCartOpen , setIsCartOpen, cartItems , addItemToCart ,removeItemFromCart,clearItemFromCart, cartCount, setCartCount}
    
    return(
        <CartContext.Provider  value={value}>{children}</CartContext.Provider>
    )
}