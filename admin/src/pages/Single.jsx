import React from 'react'
import "../styles/single.scss"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Chart from "../components/Chart"
import Table from "../components/Table"

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className='singleContainer'>
                <Navbar />
                <div className="top">
                    <div className="left">
                        <button className='editButton'>Edit</button>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img className='itemImg' src="https://pbs.twimg.com/profile_images/1562352061664182272/8X938uHE_400x400.jpg" alt="" />
                            <div className="details">
                                <h1 className="itemTitle">Mustafa Usakli</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">mustafausakli_@hotmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+905532768090</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Izmir Bayraklı, 1647 sokak no:4</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Turkey</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="user spending (last 6 months)" />
                    </div>
                </div>
                <div className="bottom">
                    <Table />
                </div>
            </div>

        </div>
    )
}

export default Single