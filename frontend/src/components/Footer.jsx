import React from 'react'
import "../styles/footer.scss"
import { AiOutlineTwitter, AiFillGithub, AiFillInstagram, AiFillPhone, AiFillMail } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-left'>
                <h1 className='footer-logo'>aelita</h1>
                <p className='footer-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro expedita ducimus veniam aut voluptatem voluptate eveniet quos fugiat assumenda.
                </p>
                <div className='social-container' >
                    <AiOutlineTwitter className="icon twitter" />
                    <AiFillGithub className="icon github" />
                    <AiFillInstagram className="icon instagram" />
                </div>
            </div>
            <div className='footer-center'>
                <h3 className='footer-title'> Useful Links </h3>
                <ul className='list-items'>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Popular</li>
                    <li>Drinks</li>
                    <li>dessert</li>
                    <li>magnolia</li>
                    <li>coffee</li>
                    <li>frozens</li>
                    <li>smoothies</li>
                </ul>
            </div>
            <div className='footer-right' >
                <h2>Contact</h2>
                <a href='https://www.google.com/maps/place/Kazımdirik,+220.+Sk.+No:10,+35100+Bornova%2Fİzmir/@38.4576114,27.2040348,3a,45.9y,188h,86.43t/data=!3m6!1e1!3m4!1s1G6sW_W_Wuk1DKkb2QB2ag!2e0!7i16384!8i8192!4m5!3m4!1s0x14b97d33e62daf8b:0x9dd4963767b3524c!8m2!3d38.4574398!4d27.2042087' target="blank"
                    className='contact-item'> <MdLocationOn className='contact-icon' /> 220 sokak no:10A</a>
                <a href='tel:+905532768090' className='contact-item'><AiFillPhone className='contact-icon' /> +905532768090</a>
                <a href='mailto:mustafausakli_@hotmail.com' className='contact-item'><AiFillMail className='contact-icon' /> mustafausakli_@hotmail.com</a>

                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />

            </div>
        </footer>
    )
}

export default Footer