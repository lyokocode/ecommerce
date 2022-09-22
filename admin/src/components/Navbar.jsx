import React from 'react'
import "../styles/navbar.scss"
import { AiOutlineSearch, AiOutlineFullscreen, AiOutlineUnorderedList } from "react-icons/ai"
import { MdLanguage, MdOutlineDarkMode, MdNotifications, MdChatBubble } from "react-icons/md"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <AiOutlineSearch className='icon' />
                </div>
                <div className="items">
                    <div className="item">
                        <MdLanguage className='icon' />
                        English
                    </div>
                    <div className="item">
                        <MdOutlineDarkMode className='icon' />
                    </div>
                    <div className="item">
                        <AiOutlineFullscreen className='icon' />
                    </div>
                    <div className="item">
                        <MdNotifications className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <MdChatBubble className='icon' />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <AiOutlineUnorderedList className='icon' />
                    </div>
                    <div className="item">
                        <img
                            src="https://avatars.githubusercontent.com/u/105174310?s=400&u=54659c2f9fa9dfdba5e78ab01982cc82b9e19d33&v=4"
                            alt="avatar"
                            className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar