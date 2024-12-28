// Chart.js
import React from 'react';
// import './Chart.css';

function Chart({ company }) {
    if (!company) {
        return (
            <div className="chart">
                <h2>Select a company to view its data</h2>
            </div>
        );
    }

    return (
        <div className="chart">
            <h2>Company: {company.name}</h2>
            <p>Stock Value: {company.value}</p>
        </div>
    );
}

export default Chart;