import React from 'react'
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import "./Header.css"
const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="header">
            <h1 className="website">devfinder</h1>
            <button className="theme-toggle" onClick={toggleDarkMode}>
                {darkMode ? "Light" : "Dark"}
                { 
                    darkMode ?
                    <img src={sun} alt="sun" />
                    :
                    <img src={moon} alt="moon" />
                }
            </button>
        </div>
    )
}

export default Header