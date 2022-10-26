import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/singleProduct.scss"

const SingleProduct = () => {

    const params = useParams()
    const { slug, category } = params

    const [items, setItems] = useState({})

    useEffect(() => {
        const fetchItem = async () => {
            const { data } = await axios.get(`/api/products/${category}/${slug}`)
            setItems(data)
        }
        fetchItem()
    }, [slug])


    return (

        <div className='singleProduct-container' >


            <h1>{items.name}</h1>
            <div className="wrapper">
                <div className="image-container">
                    <img src={items.image} alt="" />
                </div>
                <div className="info-container">
                    <h1 className='title'></h1>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia reprehenderit praesentium, facilis consectetur harum.</p>
                    <span className='price'>{items.price}₺</span>

                    <div className='add-container'>
                        <div className="amount-container">
                            <button className='counter'>-</button>
                            <span className='amount'>2</span>
                            <button className='counter'>+</button>
                        </div>
                        <button className='add-button'>ADD TO CART</button>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default SingleProduct