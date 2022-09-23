import React from 'react'
import "../styles/chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        { name: 'April  ', Total: 10000 },
        { name: 'May  ', Total: 12000 },
        { name: 'June  ', Total: 9000 },
        { name: 'July  ', Total: 11000 },
        { name: 'August  ', Total: 10000 },
        { name: 'September ', Total: 14000 },

    ];
    return (
        <div className='chart'>
            <div className="title">Last 6 Months (Revenue)</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>

                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart