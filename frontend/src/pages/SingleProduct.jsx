import React from 'react'
import "../styles/singleProduct.scss"

const SingleProduct = () => {
    return (
        <div className='singleProduct-container'>
            <div className="wrapper">
                <div className="image-container">
                    <img src="images/hangover.jpg" alt="" />
                </div>
                <div className="info-container">
                    <h1 className='title'>Hangover</h1>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia reprehenderit praesentium, facilis consectetur harum.</p>
                    <span className='price'>$55</span>

                    <div className='add-container'>
                        <div className="amount-container">
                            <button className='counter'>-</button>
                            <span className='amount'>2</span>
                            <button className='counter'>+</button>
                        </div>
                        <button className='add-button'>ADD TO CART</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct