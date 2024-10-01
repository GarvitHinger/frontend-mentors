import React from "react";
import "./style.css";
import logo from "./images/logo.svg";
import Chart from "./Chart.js"
import data from "./data.json";

function ExpenseChart() {

    const maxAmount = Math.max(...data.map((entry) => entry.amount));
    return (
        <div className="container">
            <div className="header">
                <div className="header-left">
                    <p className="header-balance">My balance</p>
                    <p className="header-amount">$921.48</p>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="main">
                <div className="main-spend">Spending - Last 7 days</div>
                <div className="chart">
                    <Chart
                        data={data}
                        maxAmount={maxAmount}
                    />
                </div>
                <hr />
                <div className="main-last">
                    <div className="main-total-month">
                        <p>Total this month</p>
                        <h4>$478.33</h4>
                    </div>
                    <div className="main-last-month">
                        <p>+2.4%</p>
                        <h4>from last month</h4>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default ExpenseChart;