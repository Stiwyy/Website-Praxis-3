import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <div className="logo">
            </div>
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/gallery">Galerie</Link></li>
                <li><Link to="/tips">Tipps</Link></li>
                <li><Link to="/rules">Regeln</Link></li>
                <li><Link to="/positions">Positionen</Link></li>
            </ul>
            <span className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? '×' : '☰'}
            </span>
        </nav>
    );
}
