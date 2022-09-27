import { useSelector } from "react-redux";
import { selectCartItems, SelectNewCartTotal } from "../../../store/cart/cart-selector";
import CheckoutItem from "../../checkout-item/checkout-item";
import PaymentForm from "../../payment-form/payment-form";
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles';
  
  const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(SelectNewCartTotal);
  
    return (
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>Total: ${cartTotal}</Total>
       <PaymentForm />
      </CheckoutContainer>
    );
  };
  
  export default Checkout;