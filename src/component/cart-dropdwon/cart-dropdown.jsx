import { useContext } from 'react';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../context/cart-context';
import './cartdrop.styles.scss';


function CartDropDown(){
    const {cartItems} = useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {
                cartItems.map((cartItem)=>(
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                 ))
            }
        </div>
         <Button buttonType='inverted'> GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;