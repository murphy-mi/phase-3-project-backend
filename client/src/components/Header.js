import React from 'react';
import { useNavigate } from 'react-router';

// import './Header.css';

function Header() {
  let navigate = useNavigate();
  return (
    <div className="Header">
      <h1 className="Title" onClick={() => navigate('../')}>
        G E O P A R I S O N
      </h1>
    </div>
  );
}

export default Header;
