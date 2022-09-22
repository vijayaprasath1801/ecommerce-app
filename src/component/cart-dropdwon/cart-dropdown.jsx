import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../context/cart-context';
import { CartDropDownContainer, CartItems } from './cartdrop.styles';


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
                cartItems.map((cartItem)=>(
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                 ))
            }
        </CartItems>
         <Button buttonType='inverted' onClick={navigateHandler}> GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown;