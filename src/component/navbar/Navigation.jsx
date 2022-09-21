import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ShopLogo } from '../../assets/ShopLogo.svg';
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdwon/cart-dropdown";
import { UserContext } from "../context/user.context";
import '../navbar/Navigation.styles.scss';
import { CartContext } from "../context/cart-context";

function Navigation() {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <div>
          <Link className="logo-container" to='/'>
          <ShopLogo />
          </Link>
          </div>
        <div className="nav-links-container">
        <Link className="nav-link" to='/shop'>SHOP</Link>
        {
          currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) : (<Link className="nav-link" to='/auth'>SIGN IN</Link>)
        }
        <CartIcon />
        </div>{
          isCartOpen && <CartDropDown />
        }
        
        </div>
        <Outlet />
    </Fragment>
  );
}

export default Navigation;
