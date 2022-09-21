import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import './checkout-item.styles.scss';

function CheckoutItem({cartItem}){
 const {name, imageUrl ,quantity , price} = cartItem;
 const{clearItemFromCart , removeItemFromCart , addItemToCart} = useContext(CartContext);
    return(
        <div className='checkout-item-container'>
          <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
          </div>
          <span className='name'>{name}</span>
         <span className='quantity'>
         <div className='arrow' onClick={()=>removeItemFromCart(cartItem)}>&#8810;</div>
         <span>{quantity}</span>
         <div className='arrow' onClick={()=>addItemToCart(cartItem)}>&#8811;</div>
         </span>
       
         <span className='price'>{price}</span>
          <div className='remove-button' onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;