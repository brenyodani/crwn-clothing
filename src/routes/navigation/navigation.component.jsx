
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import  { NavigationContainer, NavLinks, NavLink,LogoContainer } from './navigation.styles.jsx';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.contexts';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);

 

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