import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App