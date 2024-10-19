import React, { useState, useEffect } from 'react';
import searchIcon from "../assets/icon-search.svg";
import "./SearchBar.css";
const SearchBar = ({ saveUserData }) => {

    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchUserData("google");
    },[]);

    function fetchUserData(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                if (data.message === "Not Found") {
                    setError(true);
                } else {
                    // console.log("Data from search bar", data);
                    // console.log(data);
                    setError(false);
                    saveUserData(data);
                    setUsername("");
                }
            })
    }


    function handleChange(e) {
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetchUserData(username);
    }

    return (
        <form className="search-form" onSubmit={handleSubmit} >
            <img className="search-icon" src={searchIcon} alt="search" />
            <input type="text" className='username' placeholder="Search Github username" name="username" value={username} onChange={handleChange} />
            {error && <span className="error">No results</span>}
            <button type="submit" className="search-button">Search</button>
        </form>
    )
}

export default SearchBar;