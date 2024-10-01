import React from 'react'
import bigPicture from "../assets/images/image-web-3-desktop.jpg";
import "../style/style.css";
const MiddlePart = () => {
    return (
        <div className="middle-part">
            <div className="first-middle">
                <img src={bigPicture} alt='Big-picture'/>
            </div>
            <div className="second-middle">
                <div className="second-middle-left">
                    <p>The Bright Future of Web 3.0?</p>
                </div>
                <div className="second-middle-right">
                    
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button>READ MORE</button>
                </div>
            </div>
            <div className="third-middle">
                <h2>NEW </h2>
                <div className="third-middle-part">
                    <h4>Hydrogen VS Electric Cars</h4>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <hr />
                <div className="third-middle-part">
                    <h4>The Downsides of AI Artistry</h4>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <hr />
                <div className="third-middle-part">
                    <h4>Is VC Funding Drying Up?</h4>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </div>

    )
}

export default MiddlePart