
import { ReactComponent as ShoppingIcon } from '../../assets/cartLogo.svg';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { CartIconContainer, ItemCount } from './cart.styles';

function CartIcon(){
  
    const {isCartOpen ,setIsCartOpen , cartCount} = useContext(CartContext)


   function toggleOpen(){
    setIsCartOpen(!isCartOpen)
   } 

    return(
        <CartIconContainer>
         <ShoppingIcon className='shopping-icon' onClick={toggleOpen}/>
         <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;