import React, { useState } from 'react'
import "../styles/new.scss"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { MdOutlineDriveFolderUpload } from "react-icons/md"

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("")

    return (
        <div className='new'>
            <Sidebar />
            <div className='newContainer'>
                <Navbar />
                <div className='top'>
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3_f9q9lPXZPFPp_XuoBsoKtG-kD1nW1nMg&usqp=CAU"} />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor='file'>Image: <MdOutlineDriveFolderUpload className='icon' /></label>
                                <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                            </div>
                            {inputs.map((input) => (

                                <div key={input.id} className="formInput">
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>

                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New