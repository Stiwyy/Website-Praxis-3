import React from 'react';
import '../styles/App.css';

const positions = [
    { id: 1, name: 'Passeur', description: 'Passt den Ball zu den Angreifern' },
    { id: 2, name: 'Aussenangreifer', description: 'Greift auf der Position 4 oder 6 an' },
    { id: 3, name: 'Mittelangreifer', description: 'Blockt Angriffe und greift vorne in der Mitte an' },
    { id: 4, name: 'Diagonalangreifer', description: 'Greift auf Position 2 oder 1 an' },
    { id: 5, name: 'Aussenangreifer', description: 'Greift auf der Position 4 oder 6 an' },
    { id: 6, name: 'Libero', description: 'Verantwortlich für Annahme und Verteidigung' },
];

export default function Positions() {
    return (
        <div className="positions">
            <h2 className="positions-title">Spielerpositionen im Volleyball</h2>
            <div className="field">
                {positions.map((pos) => (
                    <div
                        key={pos.id}
                        className="position"
                    >
                        <span className="position-name">{pos.name}</span>
                        <div className="position-description">
                            {pos.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
