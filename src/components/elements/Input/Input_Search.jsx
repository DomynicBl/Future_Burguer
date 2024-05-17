import React from 'react';
import './Input_Search.css';

function Input_Search({ type, placeholder, search, setSearch }) {
    return (
        <div className="Search">
            <input type={type} value={search} onChange={(e) => setSearch(e.target.value)} placeholder={placeholder}/>
        </div>
    );
}

export default Input_Search;
