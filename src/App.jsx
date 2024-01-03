// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleSearch = () => {
    setIsActive(!isActive);
    if (!isActive) {
      document.querySelector('.input').focus();
    }
  };

  return (
    <div className={`search ${isActive ? 'active' : ''}`}>
      <input type="text" className="input" placeholder="Search..." />
      <button className="btn" onClick={toggleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default App;


