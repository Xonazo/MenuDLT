import React from 'react';
import "../styles/NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
        <li className="nav-item"><a href="/menu" className="nav-link">Menu</a></li>

      </ul>
    </nav>
  );
}

export default NavBar;
