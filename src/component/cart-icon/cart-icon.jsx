import { ReactComponent as ShoppingIcon } from '../../assets/cartLogo.svg';
import { CartIconContainer, ItemCount } from './cart.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartOpen, selectNewCartCount } from '../../store/cart/cart-selector';
import { setIsCartOpen } from '../../store/cart/cart-action';

function CartIcon(){
  
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectCartOpen);
    const cartCount = useSelector(selectNewCartCount);

   function toggleOpen(){
    dispatch(setIsCartOpen(!isCartOpen))
   } 

    return(
        <CartIconContainer>
         <ShoppingIcon className='shopping-icon' onClick={toggleOpen}/>
         <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;