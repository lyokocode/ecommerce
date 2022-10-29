import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import Products from './components/Products';

const App = () => {
  return (

    <BrowserRouter>
      <div className='aelita'>
        <Navbar />
        <main className='route'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/products/:category' element={<Products />} />
            <Route exact path='/products/:category/:slug' element={<SingleProduct />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App