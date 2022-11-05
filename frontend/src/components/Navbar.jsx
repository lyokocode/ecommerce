import React, { useContext } from 'react'
import "../styles/navbar.scss"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { MdOutlineLanguage } from "react-icons/md"
import { Link } from 'react-router-dom'
import { Store } from '../Store';

const Navbar = () => {

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
    };

    return (
        <header className='header-container'>
            <div className="header-wrapper">
                <div className='left'>
                    <div className='language'> <MdOutlineLanguage />EN</div>
                    <div className='search'>
                        <input placeholder='search here...' type="text" />
                        <AiOutlineSearch className='search-icon' />
                    </div>
                </div>
                <Link to="/" className='center'>
                    <h1 className='logo'>aelita.</h1>
                </Link>
                <nav className='right'>
                    {userInfo ? (
                        <div className="dropdown">
                            <button className="dropbtn">{userInfo.name}</button>
                            <div className="dropdown-content">
                                <a>{userInfo.email}</a>
                                <a>{userInfo.name}</a>
                                <Link onClick={signoutHandler}>sign out</Link>
                            </div>
                        </div>
                    ) : (

                        <Link to="login" className="menu-item">SIGN IN</Link>
                    )}
                    <Link to="about" className="menu-item">ABOUT</Link>
                    <Link to="cart" className="menu-item notification"><AiOutlineShoppingCart />
                        <span className='badge'>{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar