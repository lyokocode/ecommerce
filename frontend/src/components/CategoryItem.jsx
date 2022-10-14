import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({ item }) => {
    return (
        <div className='category'>
            <img src={item.image} alt={item.category} />
            <div className='category-info'>
                <h1 className='category-title'>{item.name}</h1>
                <Link to={`products/${item.category}`} >
                    <button>SHOP NOW</button>
                </Link>

            </div>
        </div>
    )
}

export default CategoryItem