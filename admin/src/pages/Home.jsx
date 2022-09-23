import React from 'react'
import "../styles/home.scss"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Widget from '../components/Widget'
import Featured from '../components/Featured'
import Chart from '../components/Chart'
import Table from '../components/Table'

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgetContainer">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home