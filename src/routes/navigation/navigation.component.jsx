
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import  { NavigationContainer, NavLinks, NavLink,LogoContainer } from './navigation.styles.jsx';
import { useSelector } from "react-redux";


import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
 

    return (
    <Fragment>
      <NavigationContainer>
         <LogoContainer to='/'>
            <CrwnLogo className="logo" />
        </LogoContainer>
        
        <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>Sign out</span>
              ) : (
            <NavLink to='/auth'>
                Sign-In
            </NavLink>
              )
            }
            <CartIcon />
        </NavLinks>
      {isCartOpen && <CartDropDown /> } 
        </NavigationContainer>
      <Outlet />
    </Fragment>
    )
  }



  export default Navigation;