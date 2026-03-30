

import "../Style/Header.css";


import React, { useState } from "react";
import { Link } from "react-router-dom";




export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
     <nav className="navbar">
      <h2 className="logo">Nexus</h2>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/service" onClick={() => setMenuOpen(false)}>Courses</Link></li>
      </ul>
    </nav>
    
    
  )
}
