import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { MdOutlineFavoriteBorder } from "react-icons/md"

const Product = ({ item }) => {
    return (
        <div className='product'>
            <div className="circle"></div>
            <img src={item.image} alt="" />
            <div className="info">
                <span className='icon-container'><AiOutlineShoppingCart className='product-icon' /></span>
                <span className='icon-container'><AiOutlineSearch className='product-icon' /></span>
                <span className='icon-container'><MdOutlineFavoriteBorder className='product-icon' /></span>
            </div>
        </div>
    )
}

export default Product