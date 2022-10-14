import React, { useEffect, useState } from 'react'
import "../styles/product.scss"
import Product from './Product'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Products = () => {

    const params = useParams()
    const { category } = params

    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`/api/products/${category}`)
            setProduct(data)
        }
        fetchProducts()
    }, [category])
    return (
        <main className='product-container'>
            {product.map(item => (
                <Product item={item} key={item._id} />
            ))}
        </main>
    )
}

export default Products