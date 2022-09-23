import React from 'react'
import "../styles/home.scss"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Widget from '../components/Widget'

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="home-container">
                <Navbar />
                <div className="widget-container">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
            </div>
        </div>
    )
}

export default Home