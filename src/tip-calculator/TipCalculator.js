import React, { useState } from "react";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";
import './styles/style.css'

function TipCalculator() {

    const [bill, setBill] = useState('');
    const [tip, setTip] = useState('');
    const [customTip, setCustomTip] = useState("");
    const [people, setPeople] = useState(1);

    const handleBillChange = (e) => setBill(e.target.value);
    const handleTipChange = (percentage) => {
        setTip(percentage);
        setCustomTip('');
    };
    const handleCustomTipChange = (e) => {
        setCustomTip(e.target.value);
        if (customTip) {
            setTip('')
        }
    };
    const handleResetChange = () => {
        setTip('');
        setBill('');
        setCustomTip('');
        setPeople('');
    }
    const handlePeopleChange = (e) => {
            setPeople(e.target.value);
    };

    const calculateTipAmount = () => {
        const tipPercentage = customTip || tip;
        if (!bill ||  !people || people === 0) {
            return { tipAmount: 0, total: 0 };
        }
        const tipAmount = (bill * (tipPercentage / 100)) / people;
        const total = parseFloat(bill) / people + tipAmount;
        return { tipAmount, total };
    }

    const { tipAmount, total } = calculateTipAmount();

    

    return (
        <div className="container">
            <div className="splitter-header">
                <h1>SPLI</h1>
                <h1>TTER</h1>
            </div>
            <div className="splitter-app">
                <InputPanel
                    bill={bill}
                    handleBillChange={handleBillChange}
                    tip={tip}
                    handleTipChange={handleTipChange}
                    customTip={customTip}
                    handleCustomTipChange={handleCustomTipChange}
                    people={people}
                    handlePeopleChange={handlePeopleChange}
                />
                <OutputPanel
                    tipAmount={tipAmount}
                    total={total}
                    handleResetChange={handleResetChange}
                />
            </div>
        </div>
    );
}

export default TipCalculator;




// Cant put error border around it, find the way 