import React, { useState } from 'react';
import arrow from "./assets/images/icon-arrow.svg";
import "./style/style.css";

const AgeCalculator = () => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const [ageYear, setAgeYear] = useState("- -");
    const [ageMonth, setAgeMonth] = useState("- -");
    const [ageDay, setAgeDay] = useState("- -");

    const [errorDay, setErrorDay] = useState("");
    const [errorMonth, setErrorMonth] = useState("");
    const [errorYear, setErrorYear] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "day") setDay(value);
        else if (name === "month") setMonth(value);
        else if (name === "year") setYear(value);
    }

    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const isValidDate = () => {
        let isValid = true;
        const currentDate = new Date();
        if (!day) {
            isValid = false;
            setErrorDay("This field is required");
        }
        else if (day < 1 || day > 31) {
            isValid = false;
            setErrorDay("This field is invalid");
        }

        if (!month) {
            isValid = false;
            setErrorMonth("This field is required");
        }
        else if (month < 1 || month > 12) {
            isValid = false;
            setErrorMonth("THis field is invalid");
        }
        if (!month) {
            isValid = false;
            setErrorMonth("This field is required");
        }
        else if (month < 1 || month > 12) {
            isValid = false;
            setErrorMonth("This field is invalid");
        }
        if (!year) {
            isValid = false;
            setErrorYear("This filed is required");
        }



        if (isValid && parseInt(month) === 2) {
            const isLeap = isLeapYear(parseInt(year));
            if ((isLeap && day > 29) || (!isLeap && day > 28)) {
                setErrorDay("This field is invalid");
                isValid = false;
            }
        } else if (isValid && [4, 6, 9, 11].includes(parseInt(month)) && day > 30) {
            setErrorDay("This field is invalid");
            isValid = false;
        }

        if (isValid) {
            const birthDate = new Date(year, month - 1, day);
            if (birthDate > currentDate) {
                setErrorYear("Given date can't be in future");
                setErrorMonth("Given date can't be in future");
                setErrorDay("Given date can't be in future");
                isValid = false;
            }
        }
        return isValid;

    }



    const calculateAge = () => {

        const today = new Date();
        const birthDate = new Date(year, month - 1, day);

        let ageYear = today.getFullYear() - birthDate.getFullYear();
        let ageMonth = today.getMonth() - birthDate.getMonth();
        let ageDay = today.getDate() - birthDate.getDate();

        if (ageDay < 0) {
            ageMonth--;
            ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();

        }

        if (ageMonth < 0) {
            ageYear--;
            ageMonth += 12;
        }
        return { ageYear, ageMonth, ageDay };
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidDate()) {
            const { ageYear, ageMonth, ageDay } = calculateAge();
            setAgeYear(ageYear);
            setAgeMonth(ageMonth);
            setAgeDay(ageDay);
            setErrorDay("");
            setErrorMonth("");
            setErrorYear("");
        }
        else {
            setAgeYear("- -");
            setAgeMonth("- -");
            setAgeDay("- -");
        }
    }



    return (
        <div className="container">
            {/* <div className='input-section  '>
                <div className="input-group">
                    <p className="input-label-text" >DAY</p>
                    <input
                        type="number"
                        name="day"
                        placeholder="DD"
                        onChange={handleChange}
                        value={day}
                    />
                    <p className="error">{errorDay}</p>
                </div>
                <div className="input-group">
                    <p className="input-label-text">MONTH</p>
                    <input
                        type="number"
                        name="month"
                        placeholder="MM"
                        onChange={handleChange}
                        value={month}
                    />
                    <p className="error" >{errorMonth}</p>

                </div>
                <div className="input-group">
                    <p className="input-label-text">YEAR</p>
                    <input
                        type="number"
                        name="year"
                        placeholder="YYYY"
                        onChange={handleChange}
                        value={year}
                    />
                    <p className="error">{errorYear}</p>
                </div>
            </div> */}

            <div className='input-section'>
                <div className="input-group">
                    <p className={`input-label-text ${errorDay ? "label-error" : ""}`}>DAY</p> 
                    <input
                        type="number"
                        name="day"
                        placeholder="DD"
                        onChange={handleChange}
                        value={day}
                        className={`input-field ${errorDay ? "input-error" : ""}`}  
                    />
                    {errorDay && <p className="error-text">{errorDay}</p>}  
                </div>
                <div className="input-group">
                    <p className={`input-label-text ${errorMonth ? "label-error" : ""}`}>MONTH</p>
                    <input
                        type="number"
                        name="month"
                        placeholder="MM"
                        onChange={handleChange}
                        value={month}
                        className={`input-field ${errorMonth ? "input-error" : ""}`}  
                    />
                    {errorMonth && <p className="error-text">{errorMonth}</p>}  
                </div>
                <div className="input-group">
                    <p className={`input-label-text ${errorYear ? "label-error" : ""}`}>YEAR</p> 
                    <input
                        type="number"
                        name="year"
                        placeholder="YYYY"
                        onChange={handleChange}
                        value={year}
                        className={`input-field ${errorYear ? "input-error" : ""}`}  
                    />
                    {errorYear && <p className="error-text">{errorYear}</p>} 
                </div>
            </div>

            <div className="middle-section">
                <hr />
                <button
                    type='submit'
                    onClick={handleSubmit}
                >
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
            <div className="output-section">

                <h3><span className="output-year purple-color">{ageYear}</span> years</h3>
                <h3><span className="output-month purple-color">{ageMonth}</span> months</h3>
                <h3><span className="output-year purple-color">{ageDay}</span> days</h3>


            </div>
        </div>
    )
}

export default AgeCalculator