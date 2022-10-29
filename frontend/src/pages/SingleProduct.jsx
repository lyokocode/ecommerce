import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { addProduct } from '../redux/cartRedux'

import "../styles/singleProduct.scss"

const SingleProduct = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    const { slug, category } = params
    useEffect(() => {
        const fetchItem = async () => {
            const { data } = await axios.get(`/api/products/${category}/${slug}`)
            setProduct(data[0])
        }
        fetchItem()
    }, [slug, category])


    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity }))
    }

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };



    return (

        <div className='singleProduct-container' >
            <h1>{product.name}</h1>
            <div className="wrapper">
                <div className="image-container">
                    <img src={product.image} alt="" />
                </div>
                <div className="info-container">
                    <h1 className='title'></h1>
                    <p className='description'>{product.description}</p>
                    <span className='price'>{product.price}₺</span>
                    <div className='add-container'>
                        <div className="amount-container">
                            <button className='counter' onClick={() => handleQuantity("dec")}>-</button>
                            <input className='amount' min="1" type="number" onChange={e => setQuantity(e.target.value)} value={quantity} />
                            <button className='counter' onClick={() => handleQuantity("inc")} >+</button>
                        </div>
                        <button className='add-button' onClick={handleClick} >ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleProduct