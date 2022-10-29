import React from 'react'
import "../styles/messagebox.scss"

const MessageBox = (props) => {
    return (
        <div className="alert" >
            {props.children}
        </div >
    )
}

export default MessageBox