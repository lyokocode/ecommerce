import React from 'react'
import "../styles/sidebar.scss"
import { MdDashboard, MdNotifications, MdSettingsSystemDaydream, MdOutlinePsychology, MdSettingsApplications, MdLogout } from "react-icons/md"
import { AiOutlineUser, AiFillCreditCard } from "react-icons/ai"
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { FaTruck } from "react-icons/fa"
import { BiStats, BiUserCircle } from "react-icons/bi"


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">aelita</span>
            </div>
            <div className="hr"></div>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <MdDashboard className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">Lists</p>
                    <li>
                        <AiOutlineUser className="icon" />
                        <span>Users</span>
                    </li>
                    <li>
                        <SiHomeassistantcommunitystore className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <AiFillCreditCard className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <FaTruck className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">Uesful</p>
                    <li>
                        <BiStats className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <MdNotifications className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <MdSettingsSystemDaydream className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <MdOutlinePsychology className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <MdSettingsApplications className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <BiUserCircle className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <MdLogout className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="color-option"></div>
                <div className="color-option"></div>
            </div>
        </div>
    )
}

export default Sidebar