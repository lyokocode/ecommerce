import React from 'react'
import "../styles/widget.scss"

import { MdOutlineKeyboardArrowUp, MdOutlineShoppingCart, MdPersonOutline, MdOutlineAccountBalanceWallet, MdOutlineMonetizationOn } from "react-icons/md"

const Widget = ({ type }) => {

    let data;

    // temporary
    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: <MdPersonOutline className='icon user' />,
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "view all orders",
                icon: <MdOutlineShoppingCart className='icon shoppigCart' />,
            };
            break;
        case "earning":
            data = {
                title: "Earnings",
                isMoney: false,
                link: "view net earnings",
                icon: <MdOutlineMonetizationOn className='icon earning' />,
            };
            break;
        case "balance":
            data = {
                title: "Balance",
                isMoney: false,
                link: "see details",
                icon: <MdOutlineAccountBalanceWallet className='icon balance' />,
            };
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percantage positive">
                    <MdOutlineKeyboardArrowUp />
                    {diff}
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget