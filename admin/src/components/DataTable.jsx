import React from 'react'
import "../styles/dataTable.scss"
import { userColumns, userRows } from '../datatableSoutce'

const DataTable = () => {
    return (
        <div className='datatable'>
            <table>
                <tr>
                    <td><input type="checkbox" /></td>
                    {userColumns.map(col => (
                        <th style={{ width: `${col.width}px` }}>{col.headerName}</th>
                    ))}
                </tr>
                {userRows.map(row => (
                    <tr className='row'>

                        <td><input type="checkbox" /></td>
                        <td >{row.id}</td>
                        <td>{row.username}</td>
                        <td>{row.email}</td>
                        <td><img src={row.img} alt="" /></td>
                        <td>{row.age}</td>
                        <td className={`cellWithStatus ${row.status}`}>{row.status}</td>

                    </tr>
                ))}

            </table>
        </div>
    )
}

export default DataTable