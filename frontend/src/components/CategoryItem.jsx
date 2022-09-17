import React from 'react'

const CategoryItem = ({ item }) => {
    return (
        <div className='category'>
            <img src={item.image} alt={item.category} />
            <div className='category-info'>
                <h1 className='category-title'>{item.category}</h1>
                <button>SHOP NOW</button>

            </div>
        </div>
    )
}

export default CategoryItem