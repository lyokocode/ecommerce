import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'
import "../styles/login.scss"
import axios from "axios"
import { useContext, useState, useEffect } from 'react'
import { Store } from "../Store"
import { toast } from 'react-toastify'

const Login = () => {
    const redirect = "/"
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/auth/login", {
                email,
                password
            })
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');
            console.log(data)
        } catch (error) {
            toast.error("invalid email or password")
        }
    }
    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);
    return (
        <div className='login-container'>
            <div className="wrapper">
                <h1 className='title'>SIGN IN</h1>
                <form onSubmit={submitHandler}>
                    <input type="email" placeholder='email' required onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='password' required onChange={(e) => setPassword(e.target.value)} />
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