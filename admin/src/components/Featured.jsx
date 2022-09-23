import React from 'react'
import "../styles/featured.scss"
import { MdMoreVert } from 'react-icons/md'
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"


const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className='title'> Total Revenue</h1>
                <MdMoreVert className='icon' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={4} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">
                    Previous transactions processing. Last payments may not be included
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle ">Target</div>
                        <div className="itemResult negative">
                            <MdKeyboardArrowDown />
                            <div className="resultAmount">$17.8k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult positive">
                            <MdOutlineKeyboardArrowUp />
                            <div className="resultAmount">$17.8k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <MdOutlineKeyboardArrowUp />
                            <div className="resultAmount">$17.8k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured