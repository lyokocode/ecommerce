import React, { useEffect, useState, useReducer } from 'react'
import "../styles/category.scss"
import CategoryItem from './CategoryItem'
import axios from "axios"
import Loading from './Loading';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, categories: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

const Categories = () => {

    const [{ loading, error, categories }, dispatch] = useReducer(reducer, {
        categories: [],
        loading: true,
        error: '',
    });



    useEffect(() => {
        const fetchCategories = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await axios.get("/api/categories")
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchCategories();
    }, []);

    return (
        <section className='categories-container'>
            {
                loading ? (
                    <div><Loading /></div>
                )
                    : error ? (
                        <div>{error}</div>
                    )
                        : (

                            categories.map(item => (
                                <CategoryItem key={item._id} item={item} />
                            ))
                        )
            }
        </section>
    )
}

export default Categories