import React from 'react';
import websiteIcon from "../assets/icon-website.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import locationIcon from "../assets/icon-location.svg";
import companyIcon from "../assets/icon-company.svg";
import "./UserData.css";

const UserData = ({ userData }) => {

    if (!userData) {
        // console.log("data from userDataData", userData);
        return;
    }

    function convertDate(datetime) {
        const date = new Date(datetime);
        const day = date.getDate();
        const month = date.toLocaleDateString("default", { month: "short" });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }

    function displayCompany(company) {
        if (!company) {
            return <p>Not Available</p>
        } else if (company.includes("@")) {
            return <a href={`https://github.com/${company.slice(1)}`} target="_blank" rel="noreferrer">{company}</a>
        } else {
            return <p>{company}</p>
        }
    };

    const joinDate = convertDate(userData?.created_at);


    return (
        <div className="user-card">
            <div className="user-top">
                <img className="avatar" src={userData.avatar_url} alt={userData.name} />
                <div className="user-info">
                    <div className="user-info-inner">
                        <h2 className="name">{userData.name ? userData.name : userData.login}</h2>
                        <a className="login" href={`https://github.com/${userData.login}`} target="_blank" rel="noreferrer">@{userData.login}</a>
                    </div>
                    <p className="joined">Joined {joinDate}</p>
                </div>
            </div>
            <div className="user-middle">
                <p className={`bio ${!userData.bio ? "not-available" : ""}`}>{userData.bio ? userData.bio : "This profile has no bio"}</p>
                <div className="stats">
                    <div className="stat">
                        <h3 className="stat-title">Repos</h3>
                        <p className="stat-number">{userData.public_repos}</p>
                    </div>
                    <div className="stat">
                        <h3 className="stat-title">Followers</h3>
                        <p className="stat-number">{userData.followers}</p>
                    </div>
                    <div className="stat">
                        <h3 className="stat-title">Following</h3>
                        <p className="stat-number">{userData.following}</p>
                    </div>
                </div>
            </div>
            <div className="user-bottom">
                <div className="links">
                    <div className={`link-wrapper ${!userData.location ? "not-available" : ""}`}>
                        <img src={locationIcon} alt="location" />
                        <p>{!userData.location ? "Not Available" : userData.location}</p>
                    </div>
                    <div className={`link-wrapper ${!userData.blog ? "not-available" : ""}`}>
                        <img src={websiteIcon} alt="website" />
                        {
                            !userData.blog ?
                                <p>Not Available</p> :
                                <a href={userData.blog} target="_blank" rel="noreferrer">{userData.blog}</a>
                        }
                    </div>
                </div>
                <div className="links">
                    <div className={`link-wrapper ${!userData.twitter_username ? "not-available" : ""}`}>
                        <img src={twitterIcon} alt="twitter" />
                        {
                            !userData.twitter_username ?
                                <p>Not Available</p> :
                                <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noreferrer">{userData.twitter_username}</a>
                        }
                    </div>
                    <div className={`link-wrapper ${!userData.company ? "not-available" : ""}`}>
                        <img src={companyIcon} alt="company" />
                        {displayCompany(userData.company)}
                    </div>
                </div>

            </div>

        </div>

    )
}

export default UserData;