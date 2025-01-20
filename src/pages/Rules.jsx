import React from 'react';
import '../styles/App.css';

const rules = [
    { text: 'Eine Mannschaft hat drei Ballkontakte.', description: 'Jeder Spieler darf den Ball nur einmal berühren, bevor er zu einem anderen Spieler übergeht.' },
    { text: 'Der Ball darf das Netz berühren.', description: 'Es ist erlaubt, dass der Ball das Netz während des Spiels berührt, solange er das Spielfeld des Gegners erreicht.' },
    { text: 'Das Spiel wird auf zwei Sätze gespielt.', description: 'Ein Satz endet, wenn ein Team 25 Punkte erreicht, mit mindestens zwei Punkten Vorsprung.' },
    { text: 'Ein Spiel besteht aus 3 bis 5 Sätzen.', description: 'Ein Match besteht aus der besten Anzahl von Sätzen: 3 (best-of-five), 2 (best-of-three).' },
    { text: 'Jeder Spieler muss in der richtigen Position starten.', description: 'Die Positionen müssen vor Beginn des Spiels und nach jedem Servicewechsel eingehalten werden.' },
    { text: 'Der Aufschlag muss von hinter der Grundlinie erfolgen.', description: 'Der Spieler muss den Ball von hinter der Grundlinie auf die gegnerische Seite schlagen.' }
];

export default function Rules() {
    return (
        <div className="rules-container">
            <h1 className="rules-title">Wichtige Volleyball Regeln</h1>
            <div className="rules-list">
                {rules.map((rule, index) => (
                    <div key={index} className="rule-item">
                        <h2 className="rule-title">{rule.text}</h2>
                        <p className="rule-description">{rule.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
