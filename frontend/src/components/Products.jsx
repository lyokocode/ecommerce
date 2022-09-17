import React from 'react'
import "../styles/product.scss"
import { popularProducts } from '../data'
import Product from './Product'

const Products = () => {
    return (
        <main className='product-container'>
            {popularProducts.map(item => (
                <Product key={item.id} item={item} />
            ))}
        </main>
    )
}

export default Products