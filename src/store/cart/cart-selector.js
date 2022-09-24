import { createSelector } from "reselect";

export const selectCartReducer = (state)=> state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
);

export const selectNewCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
)  
);
export const SelectNewCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      )
) ;