import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter >
      <div className='aelita'>
        <Navbar />
        <main className='route'>

          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App