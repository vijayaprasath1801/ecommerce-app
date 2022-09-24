import { removeItemToCart , addItemToCart , clearItemFromCart } from '../../store/cart/cart-action';
import { useDispatch, useSelector } from 'react-redux';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton } from './checkout-item.styles.jsx';
import { selectCartItems } from '../../store/cart/cart-selector';

function CheckoutItem({cartItem}){
 const {name, imageUrl ,quantity , price} = cartItem;
 const dispatch = useDispatch();
 const cartItems = useSelector(selectCartItems);


    return(
        <CheckoutItemContainer>
          <ImageContainer>
            <img src={imageUrl} alt={`${name}`}/>
          </ImageContainer>
          <BaseSpan>{name}</BaseSpan>
         <Quantity>
         <Arrow onClick={()=>dispatch (removeItemToCart(cartItems, cartItem))}>&#8810;</Arrow>
         <span>{quantity}</span>
         <Arrow onClick={()=>dispatch (addItemToCart(cartItems, cartItem))}>&#8811;</Arrow>
         </Quantity>
       
         <BaseSpan>{price}</BaseSpan>
          <RemoveButton onClick={()=>dispatch(clearItemFromCart(cartItems, cartItem))}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;