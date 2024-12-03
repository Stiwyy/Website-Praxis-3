import React from 'react';
import '../styles/Position.css'

const positions = [
    { id: 1, name: 'Außenangreifer', description: 'Punktet an den Seitenlinien.' },
    { id: 2, name: 'Mittelblocker', description: 'Blockiert Angriffe des Gegners.' },
    { id: 3, name: 'Zuspieler', description: 'Setzt die Angriffe auf.' },
];

export default function Positions() {
    return (
        <div className="positions">
            <div className="field">
                {positions.map((pos) => (
                    <div key={pos.id} className="position" title={pos.description}>
                        {pos.name}
                    </div>
                ))}
            </div>
        </div>
    );
}
