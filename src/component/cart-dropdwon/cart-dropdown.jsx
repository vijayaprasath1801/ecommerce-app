import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../context/cart-context';
import { CartDropDownContainer, CartItems, EmptyMsg } from './cartdrop.styles';


function CartDropDown(){
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const navigateHandler=()=>{
        navigate('/checkout')
    }
    return(
        <CartDropDownContainer>
        <CartItems>
            {
                cartItems.length ?(
                cartItems.map((cartItem)=>(
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                 ))) : 
                 <EmptyMsg>Your Cart is Empty</EmptyMsg>
            }
        </CartItems>
         <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={navigateHandler}> GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown;