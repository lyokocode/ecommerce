import React from 'react'
import "../styles/home.scss"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Widget from '../components/Widget'
import Featured from '../components/Featured'
import Chart from '../components/Chart'
import Table from '../components/Table'
import UserNewTable from '../components/UserNewTable'

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
                    <Chart title="last 6 months (revanue)" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className='tableContainer'>
                        <UserNewTable />
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home