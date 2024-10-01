import React from "react";

function OutputPanel({ tipAmount, total, handleResetChange }) {
        return (
                <div className="output-panel">
                        <div className="output-upper">
                                <div className="output-group">
                                        <div className="output-text">
                                                <h3>Tip Amount</h3>
                                                <h4>/ person</h4>
                                        </div>
                                        <div className="output-value">
                                                <p>${tipAmount.toFixed(2)}</p>
                                        </div>
                                </div>
                                <div className="output-group">
                                        <div className="output-text">
                                                <h3>Total</h3>
                                                <h4>/ person</h4>
                                        </div>
                                        <div className="output-value">
                                                <p>${total.toFixed(2)}</p>
                                        </div>
                                </div>
                        </div>
                        <div className="output-lower">
                                <button onClick={handleResetChange}>RESET</button>

                        </div>

                </div>
        );
}

export default OutputPanel;
