import './cart.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/cartLogo.svg';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

function CartIcon(){
  
    const {isCartOpen ,setIsCartOpen , cartCount} = useContext(CartContext)


   function toggleOpen(){
    setIsCartOpen(!isCartOpen)
   } 

    return(
        <div className='cart-icon-container'>
         <ShoppingIcon className='shopping-icon' onClick={toggleOpen}/>
         <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;