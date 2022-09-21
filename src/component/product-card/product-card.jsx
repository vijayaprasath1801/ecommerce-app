import './product-card.styles.scss';

import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';

const ProductCard =({product}) =>{
    const{imageUrl, name, price} = product;
    const {addItemToCart} = useContext(CartContext);
 const addProduct =()=> addItemToCart(product);
    return(
<div className='product-card-container'>
<img src={imageUrl} alt={`${name}`}/>
<div className='footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>
<Button buttonType='inverted' onClick={addProduct} >Add to Cart</Button>
</div>
    )
 
}

export default ProductCard;