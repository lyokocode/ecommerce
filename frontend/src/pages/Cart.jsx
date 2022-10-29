import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import "../styles/cart.scss"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    let type = "filled"
    // type = "deneme"
    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart: { cartItems }, } = state;
    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`);
        if (item.countInStock < quantity) {
            window.alert('Sorry. Product is out of stock');
            return;
        }
        ctxDispatch({
            type: 'CART_ADD_ITEM',
            payload: { ...item, quantity },
        });
    };
    const removeItemHandler = (item) => {
        ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    };

    const checkoutHandler = () => {
        navigate('/signin?redirect=/shipping');
    };


    return (
        <div className='cart-container'>
            <div className="wrapper">
                <h1 className='title'>YOUR BAG</h1>
                <div className="top">
                    <button type={type} className={type === "filled" ? "black" : "transparent"}>continue shopping</button>
                    <div className='top-texts'>
                        <p className='top-text'>shopping bag(2)</p>
                        <p className='top-text'> your wishlist(0)</p>
                    </div>
                    <button type={type} className={type === "filled" ? "black" : "transparent"}>checkout now</button>
                </div>
                <div className="bottom">
                    <div className="info">
                        {cartItems.map(product => (

                            <div className="product" key={product._id}>
                                <div className="product-detail">
                                    <img src={product.image} alt="" />
                                    <div className="details">
                                        <h1 className='product-name'><b>PRODUCT:</b>{product.name}</h1>
                                        <h1 className='product-id'><b>ID:</b>{product._id}</h1>
                                    </div>
                                </div>
                                <div className="price-detail ">
                                    <div className="product-amount">
                                        <button className="counter" disabled={product.quantity === 1}
                                            onClick={() => updateCartHandler(product, product.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span className='amount'>{product.quantity} adet</span>
                                        <button
                                            className="counter" disabled={product.quantity === product.countInStock}
                                            onClick={() => updateCartHandler(product, product.quantity + 1)}
                                        >
                                            +
                                        </button>

                                    </div>
                                    <div className='product-price'>{product.price * product.quantity}₺</div>
                                </div>
                            </div>
                        ))
                        }

                    </div>
                    <div className="summary">
                        <h1 className='title'>ORDER SUMMARY</h1>
                        <div className="summary-item">
                            <span className="text">Items</span>
                            <span className="price">{cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
                        </div>
                        <div className="summary-item">
                            <span className="text">SUBTOTAL</span>
                            <span className="price">{cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}₺</span>
                        </div>
                        <div className="summary-item">
                            <span className="text">Estimated Shipping</span>
                            <span className="price">20.90₺</span>
                        </div>
                        <div className="summary-item">
                            <span className="text">Shipping Discount</span>
                            <span className="price">20.90₺</span>
                        </div>
                        <div className="summary-item total">
                            <span className="text">TOTAL</span>
                            <span className="price">{cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}₺</span>
                        </div>
                        <button>checkout now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart