import React, { useContext } from 'react'
import "../styles/navbar.scss"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { MdOutlineLanguage } from "react-icons/md"
import { Link } from 'react-router-dom'
import { Store } from '../Store';

const Navbar = () => {

    const { state } = useContext(Store);
    const { cart } = state;
    console.log(cart.cartItems.length)

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
                    <Link to="about" className="menu-item">ABOUT</Link>
                    <Link to="register" className="menu-item">REGISTER</Link>
                    <Link to="login" className="menu-item">SIGN IN</Link>
                    <Link to="cart" className="menu-item notification"><AiOutlineShoppingCart />
                        <span className='badge'>{cart.cartItems.length}</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar