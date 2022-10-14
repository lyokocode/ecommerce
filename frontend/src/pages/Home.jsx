import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'


const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <Categories />
            <Footer />

        </div>
    )
}

export default Home