import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart-selector';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
import CartItem from '../cart-item/cart-item';
import { CartDropDownContainer, CartItems, EmptyMsg } from './cartdrop.styles';


function CartDropDown(){
    const cartItems = useSelector(selectCartItems);
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