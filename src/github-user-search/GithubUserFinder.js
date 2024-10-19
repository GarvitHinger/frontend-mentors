import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserData from './components/UserData';
// import mockData from "./data.json";
import "./GithubUserFinder.css"

const GithubUserFinder = () => {
    const isDarkMode = JSON.parse(localStorage.getItem("dark-mode")) || false;
    const [darkMode, setDarkMode] = useState(isDarkMode);
    const [userData,setUserData] = useState(null);

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    function saveUserData(user) {
        setUserData(user);
    }
    // console.log("data from githubuser ", userData)
    
    useEffect(() => {
        localStorage.setItem("dark-mode", darkMode)
    }, [darkMode]);

    return (
        <div className={`app ${darkMode ? "dark" : "light"}`}>
            <div className="container">
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <SearchBar saveUserData={saveUserData} />
                <UserData userData={userData}  />  
            </div>
        </div>
    )
}

export default GithubUserFinder;