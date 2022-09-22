import React from 'react'
import "../styles/home.scss"
import Sidebar from "../components/Sidebar"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home-container">homeContainer</div>
        </div>
    )
}

export default Home