import React from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { Link } from 'react-router-dom'

const Product = ({ item }) => {

    return (
        <div className='deneme'>
            <div className='product'>
                <div className="circle"></div>
                <img src={item.image} alt="" />
                <div className="info">
                    <span className='icon-container'><AiOutlineShoppingCart className='product-icon' /></span>
                    <Link to={`/products/${item.category}/${item.slug}`} >
                        <span className='icon-container'><AiOutlineSearch className='product-icon' /></span>
                    </Link>
                    <span className='icon-container'><MdOutlineFavoriteBorder className='product-icon' /></span>
                </div>
            </div>
            <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='price'>{item.price}₺</div>
            </div>
        </div>
    )
}

export default Product