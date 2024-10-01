import React from 'react'
import logo from "../assets/images/logo.svg";
import "../style/style.css";
const FirstPart = () => {
    return (
        <div className='first-part'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-bar-menu">
                <p className="menu">Home</p>
                <p className="menu">New</p>
                <p className="menu">Popular</p>
                <p className="menu">Trending</p>
                <p className="menu">Categories</p>
            </div>
        </div>
    )
}

export default FirstPart