import React, { useEffect, useReducer, useState } from 'react'
import "../styles/product.scss"
import Product from './Product'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


const Products = () => {
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });


    const params = useParams()
    const { category } = params


    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await axios.get(`/api/products/${category}`)
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchProducts();
    }, [category]);

    return (
        <main className='product-container'>

            {
                loading ? (
                    <div><Loading /></div>
                )
                    : error ? (
                        <div>{error}</div>
                    )
                        : (

                            product.map(item => (
                                <Product key={item._id} item={item} />
                            ))

                        )
            }
        </main>
    )
}

export default Products