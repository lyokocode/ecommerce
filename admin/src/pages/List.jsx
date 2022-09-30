import React from 'react'
import "../styles/list.scss"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import DataTable from '../components/DataTable'
const List = () => {
    return (
        <div className='list '>
            <Sidebar />
            <div className='listContainer'>
                <Navbar />
                <DataTable />
            </div>
        </div>
    )
}

export default List