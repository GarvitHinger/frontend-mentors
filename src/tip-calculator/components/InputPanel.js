import React from "react";

function InputPanel({bill,
	handleBillChange, tip, handleTipChange,customTip,handleCustomTipChange,people, handlePeopleChange }) {
	const tipPercentage = [5, 10, 15, 25, 50];

  return (
	<div className="input-panel">
		  <div className="input-group">
			  <label>Bill</label>
			  <input 
				  type="number"
				  value={bill}
				  onChange={handleBillChange}
				  placeholder="0"
			  />
		  </div>
		  <div className="input-group">
			  <label>Select Tip %</label>
			  <div className="tip-buttons">
				  {tipPercentage.map((tipValue) => (
					  <button
						  key={tipValue}
						  className={`tip-button ${tip === tipValue ? 'selected' : ''}`}
						  onClick={() => handleTipChange(tipValue)}
					  >
						  {tipValue}%
					  </button>
				  ))}
				  <input
					  className="custom-input"
					  type="number"
					  placeholder="Custom"
					  value={customTip}
					  onChange={handleCustomTipChange}
				  />
			  </div>
		  </div>
		  <div className="input-group">
			  <label>Number of People</label>
			  {people === 0 && (
          		<span className="error-message">Can't be zero</span>
       	   		 )}
			  <input
				  type="number"
				  placeholder="1"
				  value={people}
				  onChange={handlePeopleChange}
				  className={people === 0 ? "error-border" : ""}
			  />
			  
		  </div>
	</div>
  );
}

export default InputPanel;
