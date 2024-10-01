import React from 'react';
import first from "../assets/images/image-retro-pcs.jpg";
import second from "../assets/images/image-top-laptops.jpg";
import third from "../assets/images/image-gaming-growth.jpg";
import "../style/style.css";
const LastPart = () => {
    return (
        <div className='last-part'>
            <div className="last-part-info">
                <div className="last-part-image">
                    <img src={first} alt="last"/>
                </div>
                <div className="last-part-right">
                    <p>01</p>
                    <h5>Reviving Retro PCs</h5>
                    <h6>What happens when old PCs are given modern upgrades?</h6>
                </div>
            </div>
            <div className="last-part-info">
                <div className="last-part-image">
                    <img src={second} alt="last"/>
                </div>
                <div className="last-part-right">
                    <p>02</p>
                    <h5>Top 10 Laptops of 2022</h5>
                    <h6>Our best picks for various needs and budgers.</h6>
                </div>
            </div>
            <div className="last-part-info ">
                <div className="last-part-image">
                    <img src={third} alt="last"/>
                </div>
                <div className="last-part-right">
                    <p>03</p>
                    <h5>The Growth of Gaming</h5>
                    <h6>How the pandemic has sparked fresh opportunities.</h6>
                </div>
            </div>
        </div>
    )
}

export default LastPart