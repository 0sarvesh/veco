import React, { useState } from "react";
import '../styles/Navbar.scss';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [state, setState] = useState('Menu');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setState((e)=>e  === 'Menu' ?'Close': 'Menu');
  };

  const changeText = () => {
    
  };

  return (
    <div className="navbar">
      <div className="nav-menu">
        <div className="logo">logo</div>
        <div className="menu" onClick={toggleMenu}>
          <div className="mu">{state}</div>
        </div>
      </div>

      <div className={`items ${showMenu ? 'showmenu' : ''}`}>
        <a href="" className="item">
          About company
        </a>
        <a href="" className="item">
          Payment and Delivery
        </a>
        <a href="" className="item">
          Instructions
        </a>
        <a href="" className="item">
          info centr
        </a>
        <a href="" className="item">
          Where to Buy
        </a>
      </div>

      <div className={`contact ${showMenu ? 'showmenu' : ''}`}>
        <button className="cbtn">Catalog</button>
      </div>
    </div>
  );
}

export default Navbar;
