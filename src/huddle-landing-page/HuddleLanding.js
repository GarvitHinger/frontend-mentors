import React from 'react';
import "./style.css";

import Navbar from './components/Navbar';
import FirstButton from './components/FirstButton';
import Middle from './components/Middle';
import SecondButton from './components/SecondButton';
import Footer from './components/Footer';
import Communities from './components/Communities';

const HuddleLanding = () => {
    return (
        <div className="container">
            <Navbar />
            <FirstButton />
            <Communities />
            <Middle />
            <SecondButton />
            <Footer /> 
        </div>
    )
}

export default HuddleLanding