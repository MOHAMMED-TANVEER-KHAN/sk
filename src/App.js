// App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Chart from './Chart';
import './App.css';

function App() {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);

    

    useEffect(() => {
        // Fetching data from dump.csv file
        fetch('https://raw.githubusercontent.com/shaktids/stock_app_test/refs/heads/main/dump.csv')
            .then((response) => response.text())
            .then((data) => {
                const rows = data.split('\n').slice(1); // Remove header row
                const companyData = rows.map((row) => {
                    const [name, value] = row.split(',');
                    return { name, value: parseFloat(value) };
                });
                setCompanies(companyData);
            });
    }, []);

    return (
        <div className="app">
            <Sidebar companies={companies} onSelect={setSelectedCompany} />
            <Chart company={selectedCompany} />
        </div>
    );
}

export default App;