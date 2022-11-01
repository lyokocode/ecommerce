import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from "react-helmet-async"
import "../styles/singleProduct.scss"
import Rating from '../components/Rating'
import Loading from '../components/Loading'
import MessageBox from '../components/MessageBox'
import { Store } from '../Store';


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


const SingleProduct = () => {

    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });

    const params = useParams()
    const { slug, category } = params


    useEffect(() => {
        const fetchItem = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const { data } = await axios.get(`/api/products/${category}/${slug}`)
                dispatch({ type: 'FETCH_SUCCESS', payload: data[0] });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
        };
        fetchItem();
    }, [slug, category]);

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state
    const addToCartHandler = async (product) => {
        const existItem = cart.cartItems.find((x) => x._id === product._id);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const { data } = await axios.get(`/api/products/${product._id}`);
        if (product.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...product, quantity: 1 },
            payload: { ...product, quantity },
        });
    };

    return (
        <>
            {
                loading ? (<Loading />)
                    : error ? (<MessageBox variant="danger">{error}</MessageBox>)
                        : (<div className='singleProduct-container' >
                            <Helmet>
                                <title>
                                    {`theAtelier-${product.name}`}
                                </title>
                            </Helmet>
                            <h1>{product.name}</h1>
                            <div className="wrapper">
                                <div className="image-container">
                                    <img src={product.image} alt="" />
                                </div>
                                <div className="info-container">
                                    <h1 className='title'></h1>
                                    <p className='description'>{product.description}</p>
                                    <span className='price'>{product.price}₺</span>
                                    <Rating rating={product.rating} numReviews={product.numReviews} />
                                    <div className='add-container'>
                                        {/* <div className="amount-container">
                                            <button className='counter'>-</button>
                                            <span className='amount' >1</span>
                                            <button className='counter'>+</button>
                                        </div> */}
                                        <button className='add-button' onClick={() => addToCartHandler(product)}  >{product.countInStock < 2 ? <span> OUT OF STOCK </span> : <span> ADD TO CART </span>}</button>
                                    </div>
                                </div>
                            </div>
                        </div >)
            }
        </>
    )
}

export default SingleProduct