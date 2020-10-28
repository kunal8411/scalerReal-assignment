import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
// import {auth} from '../../firebase/firebase.utils'
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
// import {selectCurrentUser} from '../../redux/user/user.selector'
const Header= ({hidden})=>(
    <div className="header">
        <Link className='logo-container' to="">
            <Logo className='logo' />
        </Link>
    <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/search' >SEARCH</Link>
        <Link className='option' to='/signin'>SIGN IN</Link>   
        <CartIcon/>
    </div>
        {
            hidden? null:<CartDropdown/> 
        }
    </div>
)



const mapStateToProps = createStructuredSelector ({
    
   
    hidden:selectCartHidden
});




export default connect(mapStateToProps)(Header);