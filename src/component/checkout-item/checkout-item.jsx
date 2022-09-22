import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { Arrow, BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton } from './checkout-item.styles.jsx';

function CheckoutItem({cartItem}){
 const {name, imageUrl ,quantity , price} = cartItem;
 const{clearItemFromCart , removeItemFromCart , addItemToCart} = useContext(CartContext);
    return(
        <CheckoutItemContainer>
          <ImageContainer>
            <img src={imageUrl} alt={`${name}`}/>
          </ImageContainer>
          <BaseSpan>{name}</BaseSpan>
         <Quantity>
         <Arrow onClick={()=>removeItemFromCart(cartItem)}>&#8810;</Arrow>
         <span>{quantity}</span>
         <Arrow onClick={()=>addItemToCart(cartItem)}>&#8811;</Arrow>
         </Quantity>
       
         <BaseSpan>{price}</BaseSpan>
          <RemoveButton onClick={()=>clearItemFromCart(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;