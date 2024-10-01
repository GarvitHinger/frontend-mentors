function Chart({ data, maxAmount }) {
    return (
       
        <div className="chart">
        {data.map((entry) => (
          <div key={entry.day} className="bar-wrapper">
            <div
              className="bar"
              style={{
                height: `${(entry.amount / maxAmount) * 150 }px`,
                backgroundColor: entry.amount === maxAmount ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
              }}
            >
              <span className="tooltip">${entry.amount}</span>
            </div>
            <p className="day-label">{entry.day}</p>
          </div>
        ))}
      </div>
    );
}

export default Chart;