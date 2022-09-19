import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/login.scss"

const Login = () => {
    return (
        <div className='login-container'>
            <div className="wrapper">
                <h1 className='title'>SIGN IN</h1>
                <form >
                    <input type="text" placeholder='name' />
                    <input type="text" placeholder='password' />
                    <button className='login-btn'>Login </button>
                    <Link>Do not you remember the password?   </Link>
                    <Link to="/register">create a new account   </Link>
                </form>
            </div>
        </div>
    )
}

export default Login