import React from 'react'
import "../styles/register.scss"

const Register = () => {
    return (
        <div className='register-container'>
            <div className="wrapper">
                <h1 className='title'>CREATE AN ACCOUNT</h1>
                <form >
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='last name' />
                    <input type="text" placeholder='username' />
                    <input type="email" placeholder='email' />
                    <input type="text" placeholder='password' />
                    <input type="text" placeholder='username' />
                    <span className='aggrement'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur minima expedita perferendis quidem tempore. Omnis <b>PRIVACY POLICY</b>.</span>
                    <button className='create-btn'>Create </button>
                </form>
            </div>
        </div>
    )
}

export default Register