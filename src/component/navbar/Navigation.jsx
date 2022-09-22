import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as ShopLogo } from '../../assets/ShopLogo.svg';
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdwon/cart-dropdown";
import { UserContext } from "../context/user.context";
import { CartContext } from "../context/cart-context";
import { LogoContainer, NavigationContainer, NavLinks  , NavLink} from "./Navigation.styles";

function Navigation() {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>
        <div>
          <LogoContainer to='/'>
          <ShopLogo />
          </LogoContainer>
          </div>
        <NavLinks>
        <NavLink to='/shop'>SHOP</NavLink>
        {
          currentUser ? (<NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>) : (<NavLink as="span" to='/auth'>SIGN IN</NavLink>)
        }
        <CartIcon />
        </NavLinks>{
          isCartOpen && <CartDropDown />
        }
        
        </NavigationContainer>
        <Outlet />
    </Fragment>
  );
}

export default Navigation;
