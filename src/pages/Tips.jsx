import React, { useState } from 'react';
import '../styles/Rules.css'

const tips = [
    { id: 1, title: 'Tipp 1', content: 'Hier ist ein hilfreicher Volleyball-Tipp.' },
    { id: 2, title: 'Tipp 2', content: 'Bleiben Sie beim Spiel konzentriert.' },
    { id: 3, title: 'Tipp 3', content: 'Üben Sie Ihre Aufschläge regelmäßig.' },
];

export default function Tips() {
    const [activeTip, setActiveTip] = useState(null);

    return (
        <div className="tips">
            {tips.map((tip) => (
                <div
                    key={tip.id}
                    className={`card ${activeTip === tip.id ? 'active' : ''}`}
                    onClick={() => setActiveTip(tip.id === activeTip ? null : tip.id)}
                >
                    <h3>{tip.title}</h3>
                    {activeTip === tip.id && <p>{tip.content}</p>}
                </div>
            ))}
        </div>
    );
}
