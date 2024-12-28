// Sidebar.js
import React from 'react';
// import './Sidebar.css';

function Sidebar({ companies, onSelect }) {
    return (
        <div className="sidebar">
            <h3>Companies</h3>
            <ul>
                {companies.map((company, index) => (
                    <li key={index} onClick={() => onSelect(company)}>
                        {company.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;