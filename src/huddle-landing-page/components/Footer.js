import React, { useState } from 'react'
import topfooter from "../images/bg-footer-top-desktop.svg";
import logo from "../images/logo.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import "./Footer.css";

const Footer = () => {

    const [error, setError] = useState(false);
    const [mail, setMail] = useState("");




    return (
        <footer>
            <img src={topfooter} alt="topfooter" />
            <div className="footer">
                <div className="about">
                    <div>
                        <img className="footer-logo" src={logo} alt="logo" />
                        <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
                            vestibulum a, ultrices quis sem.</p>
                        <div className="phone">
                            <img src={phone} alt="phone" />
                            <p>Phone: +1-543-123-4567</p>
                        </div>
                        <div className="email">
                            <img src={email} alt="email" />
                            <p>example@huddle.com</p>
                        </div>
                    </div>
                    <div className="media-icons">
                        <a href="https://www.facebook.com/" aria-label="facebook"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/" aria-label="instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.twitter.com/" aria-label="twitter"><i className="fab fa-twitter-square"></i></a>
                    </div>
                </div>
                <div className="sign-in">
                    <div className="newsletter">
                        <h3>Newsletter</h3>
                        <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. Well never
                            send you spam or pass on your email address</p>
                    </div>
                    <div className="forms">
                        <form action="#" id="form">                           
                            <input type="text" id="mail" />
                            {/* <p>This</p> */}
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer