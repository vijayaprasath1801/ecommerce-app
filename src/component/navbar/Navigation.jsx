import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as ShopLogo } from '../../assets/ShopLogo.svg';
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdwon/cart-dropdown";
import { LogoContainer, NavigationContainer, NavLinks  , NavLink} from "./Navigation.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user-selector";
import { selectCartOpen } from "../../store/cart/cart-selector";
import { signOutStart } from "../../store/user/user-action";

function Navigation() {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen =  useSelector(selectCartOpen);
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <ShopLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          { currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;