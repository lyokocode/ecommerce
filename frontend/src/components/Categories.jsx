import React, { useEffect, useState } from 'react'
import "../styles/category.scss"
import CategoryItem from './CategoryItem'
import axios from "axios"

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            const { data } = await axios.get("/api/categories")
            setCategories(data)
        }
        fetchCategories()
    }, [])

    return (
        <section className='categories-container'>

            {categories.map(item => (
                <CategoryItem key={item._id} item={item} />
            ))}
        </section>
    )
}

export default Categories