import React from 'react'
import "../styles/navbar.scss"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { MdOutlineLanguage } from "react-icons/md"

const Navbar = () => {
    return (
        <header className='header-container'>
            <div className="header-wrapper">
                <div className='left'>
                    <div className='language'> <MdOutlineLanguage />TR</div>
                    <div className='search'>
                        <input placeholder='sdas' type="text" />
                        <AiOutlineSearch className='search-icon' />
                    </div>
                </div>
                <div className='center'>
                    <h1 className='logo'>aelita.</h1>
                </div>
                <nav className='right'>
                    <div className="menu-item">REGISTER</div>
                    <div className="menu-item">SIGN IN</div>
                    <div className="menu-item notification"><AiOutlineShoppingCart />
                        <span className='badge'>3</span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar