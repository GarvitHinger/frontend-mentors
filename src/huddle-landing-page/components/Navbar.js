import React from 'react'
import logo from "../images/logo.svg";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="nav-bar">
            <img src={logo} alt="logo"></img>
            <button>Try It Free</button>
        </div>
    )
}

export default Navbar