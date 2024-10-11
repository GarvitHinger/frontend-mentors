import React, {useState} from 'react'
import "./style/style.css";
import logo from "./images/card-logo.svg";
import frontcard from "./images/bg-card-front.png";
import backcard from "./images/bg-card-back.png";
const InteractiveCard = () => {


    const [name, setName] = useState("JANE APPLESEED");
    const [number, setNumber] = useState("0000 0000 0000 0000");
    const [mm, setMM] = useState("00");
    const [yy, setYY] = useState("00");
    const [cvv, setCVV] = useState("000");

    


    return (
        <div className='container'>
            <div className="cards">
                <div className="front-card">
                    <div className="front-card-background">
                    <img src={frontcard} alt="front" />
                    </div>
                    <div className="front-card-inside">
                        <img src={logo} alt="logo" />
                        <div className="front-card-detail">

                            <p className="card-number">{number}</p>
                            <div className='front-card-bottom'>
                                <p className="card-name">{name}</p>
                                <p className="card-expiry">{mm}/{yy}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="back-card">
                    <img className="back-card-background" src={backcard} alt="back" />
                    <div className="back-card-inside">
                        <p className="cvv-number">{cvv}</p>
                    </div>
                </div>
            </div>
            <div className="forms">
                <div className="input-group">
                    <label>CARDHOLDER NAME</label>
                    <input placeholder='e.g. JANE APPLESEED' />
                </div>
                <div className="input-group">
                    <label>CARD NUMBER</label>
                    <input placeholder='e.g. 0000 0000 0000 0000' />
                </div>
                <div className="forms-cvv-expiry">
                    <div className="input-group">
                        <label>EXP. DATE(MM/YY)</label>
                        <div className="date">
                        <input  placeholder='MM' />
                        <input  placeholder='YY' />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>CVV</label>
                        <input placeholder='e.g. 123' />
                    </div>
                </div>
                <button>CONFIRM</button>
            </div>
        </div>
    )
}

export default InteractiveCard