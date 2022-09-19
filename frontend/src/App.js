import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter >
      <div className='aelita'>
        <Navbar />
        <main className='route'>

          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Newsletter />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App