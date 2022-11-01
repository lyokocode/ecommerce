import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/login.scss"

const Login = () => {
    return (
        <div className='login-container'>
            <div className="wrapper">
                <h1 className='title'>SIGN IN</h1>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder='name' required />
                    <input type="password" placeholder='password' required />
                    <button className='login-btn' >Login </button>
                    <Link>Do not you remember the password?   </Link>
                    <span>
                        Don't have an account?
                        <Link to="/register">  Sign up </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login