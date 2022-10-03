import React from 'react'
import "../styles/dataTable.scss"
import { userColumns, userRows } from '../datatableSource'
import { Link } from 'react-router-dom'

const DataTable = () => {

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                <h3> Add New User</h3>
                <Link to="/users/new" className='link'>
                    Add new
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td><input type="checkbox" /></td>
                        {userColumns.map(col => (
                            <th key={col.field} style={{ width: `${col.width}px` }}>{col.headerName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {userRows.map(row => (
                        <tr key={row.id} className='row'>
                            <td><input type="checkbox" /></td>
                            <td >{row.id}</td>
                            <td>{row.username}</td>
                            <td>{row.email}</td>
                            <td><img src={row.img} alt="" /></td>
                            <td>{row.age}</td>
                            <td className={`cellWithStatus ${row.status}`}>{row.status}</td>
                            <td className='action'>
                                <Link to="/users/test">
                                    <button className='view-btn'>view</button>
                                </Link>
                                <button className='delete-btn'>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default DataTable