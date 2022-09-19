import React from 'react'
import "../styles/newsletter.scss"
import { MdSend } from "react-icons/md"
const Newsletter = () => {
    return (
        <main className='newsletter-container'>
            <h1 className='newsletter-title'>Newsletter</h1>
            <div className='newsletter-description'>Get timely updates from your favorite products</div>
            <form className='input-container'>
                <input type="email" placeholder='Your email' />
                <button type='submit'>
                    <MdSend />
                </button>
            </form>
        </main>
    )
}

export default Newsletter