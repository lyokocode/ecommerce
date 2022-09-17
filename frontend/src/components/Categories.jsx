import React from 'react'
import { categories } from '../data'
import "../styles/categories.scss"
import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <section className='categories-container'>
            {categories.map(item => (
                <CategoryItem key={item._id} item={item} />
            ))}
        </section>
    )
}

export default Categories