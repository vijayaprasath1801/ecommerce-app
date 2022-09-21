import { useContext } from "react";
import CheckoutItem from "../../checkout-item/checkout-item";
import { CartContext } from "../../context/cart-context";
import './checkout.styles.scss';

function Checkout(){
    const{cartItems ,addItemToCart } = useContext(CartContext);
    
    return(
        <div className="checkout-container"> 
        <div className="checkout-header">
            <div className="header-block">
            <span>Product</span>
            </div>
            <div className="header-block">
            <span>Description</span>
            </div>
            <div className="header-block">
            <span>Quantity</span>
            </div>
            <div className="header-block">
            <span>Price</span>
            </div>
            <div className="header-block">
            <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem)=>(
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
             ))
            }
      <span className="total">Total : 0</span>

        </div>
    );
}

export default Checkout;