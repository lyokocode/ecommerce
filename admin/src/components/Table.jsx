import React from 'react'
import "../styles/table.scss"

const Table = () => {

    const rows = [
        {
            id: 123456,
            product: "acer nitro 5",
            img: "https://i.nefisyemektarifleri.com/2021/11/18/istanbulun-en-meshur-12-cikolata-dukkani-9.jpg",
            customer: "aelita",
            date: "1 March",
            amount: 758,
            method: "cash on delivery",
            status: "Approved"
        }, {
            id: 123457,
            product: "playstation5",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5IIkvmU884df0Kcwy6bU2wfsp9qobzxzKEts19oxbg&s",
            customer: "odd",
            date: "1 March",
            amount: 900,
            method: "online payment",
            status: "Pending"
        },
        {
            id: 123257,
            product: "playstation5",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq5IIkvmU884df0Kcwy6bU2wfsp9qobzxzKEts19oxbg&s",
            customer: "odd",
            date: "1 March",
            amount: 900,
            method: "online payment",
            status: "Pending"
        }
    ]

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th className='tableCell'>Tracking ID</th>
                        <th className='tableCell'>Product</th>
                        <th className='tableCell'>Customer</th>
                        <th className='tableCell'>Date</th>
                        <th className='tableCell'>Amount</th>
                        <th className='tableCell'>Payment Method</th>
                        <th className='tableCell'>Status</th>
                    </tr>

                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr className='product' key={row.id}>
                            <td>{row.id}</td>
                            <td>
                                <div className="wrapper">
                                    <img src={row.img} alt="" />
                                    <p>{row.product}</p>
                                </div>
                            </td>
                            <td>{row.customer}</td>
                            <td>{row.date}</td>
                            <td>{row.amount}</td>
                            <td>{row.method}</td>
                            <td>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Table