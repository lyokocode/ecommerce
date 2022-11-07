import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store';
import "../styles/register.scss"

const Register = () => {


    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;

    const navigate = useNavigate();
    const { search } = useLocation();

    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : "/"

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("passwords do not match");
            return;
        }
        try {
            const { data } = await axios.post("/api/auth/register", {
                name,
                email,
                password
            })
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || "");
            console.log(data)
        } catch (error) {
            toast.error("kulanıcı zaten kayıtlı")
        }


    }
    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return (
        <div className='register-container'>
            <div className="wrapper">
                <h1 className='title'>CREATE AN ACCOUNT</h1>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder='confirm password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    <span className='aggrement'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur minima expedita perferendis quidem tempore. Omnis <b>PRIVACY POLICY</b>.</span>
                    <span className=' aggrement'>Already have an account? <b><Link to="/login">Sign in</Link></b> </span>
                    <button className='create-btn'>Create </button>
                </form>
            </div>
        </div>
    )
}

export default Register