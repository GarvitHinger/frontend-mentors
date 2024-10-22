import React from 'react'
import mockup from "../images/screen-mockups.svg";
import communities from "../images/icon-communities.svg";
import message from "../images/icon-messages.svg";
import "./Communities.css";
const Communities = () => {
  return (
    <div className="communities">
                <img className="mockup" src={mockup} alt="mockup" />
                <div className="stats">
                    <div className="stat">
                        <img src={communities} alt="stat" />
                        <h3>1.4k+</h3>
                        <p>Communities Formed</p>
                    </div>
                    <div className="stat">
                        <img src={message} alt="stat" />
                        <h3>2.7m+</h3>
                        <p>Messages Sent</p>
                    </div>
                </div>
            </div>
  )
}

export default Communities