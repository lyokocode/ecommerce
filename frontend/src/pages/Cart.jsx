import React from 'react'
import "../styles/cart.scss"

const Cart = () => {
    const type = "filled"
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
                        <div className="product">
                            <div className="product-detail">
                                <img src="images/hangover.jpg" alt="" />
                                <div className="details">
                                    <h1 className='product-name'><b>PRODUCT:</b>Hangover</h1>
                                    <h1 className='product-id'><b>ID:</b>24578954513</h1>
                                </div>
                            </div>
                            <div className="price-detail ">
                                <div className="product-amount">
                                    <button className="counter">-</button>
                                    <span className='amount'>2</span>
                                    <button className="counter">+</button>

                                </div>
                                <div className='product-price'>$45</div>
                            </div>
                        </div>
                        {/* 2. ürün */}
                        <div className="product">
                            <div className="product-detail">
                                <img src="images/beauty.jpg" alt="" />
                                <div className="details">
                                    <h1 className='product-name'><b>PRODUCT:</b>beauty</h1>
                                    <h1 className='product-id'><b>ID:</b>5787543123789</h1>
                                </div>
                            </div>
                            <div className="price-detail ">
                                <div className="product-amount">
                                    <button className="counter">-</button>
                                    <span className='amount'>1</span>
                                    <button className="counter">+</button>

                                </div>
                                <div className='product-price'>$40</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <h1 className='title'>ORDER SUMMARY</h1>
                        <div className="summary-item">
                            <span className="text">SUBTOTAL</span>
                            <span className="price">$130</span>
                        </div>
                        <div className="summary-item">
                            <span className="text">Estimated Shipping</span>
                            <span className="price">$5.90</span>
                        </div>
                        <div className="summary-item">
                            <span className="text">Shipping Discount</span>
                            <span className="price">$-5.90</span>
                        </div>
                        <div className="summary-item total">
                            <span className="text">TOTAL</span>
                            <span className="price">$130</span>
                        </div>
                        <button>checkout now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart