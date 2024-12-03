import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Startseite</Link></li>
                <li><Link to="/gallery">Galerie</Link></li>
                <li><Link to="/tips">Tipps</Link></li>
                <li><Link to="/rules">Regeln</Link></li>
                <li><Link to="/positions">Positionen</Link></li>
            </ul>
        </nav>
    );
}
