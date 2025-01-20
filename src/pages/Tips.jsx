import React from 'react';
import '../styles/App.css';

const tips = [
    { id: 1, title: 'Tipp 1: Aufschläge üben', content: 'Ein präziser Aufschlag ist entscheidend. Übe regelmäßig deinen Aufschlag, um präzise und unberechenbare Bälle zu schlagen.' },
    { id: 2, title: 'Tipp 2: Kommunikation im Team', content: 'Volleyball ist ein Teamsport. Sprecht euch immer ab, damit ihr effizienter auf dem Feld agieren könnt.' },
    { id: 3, title: 'Tipp 3: Beweglichkeit verbessern', content: 'Achte auf deine Beweglichkeit. Schnell auf den Beinen zu sein hilft dir, dich besser zu positionieren und den Ball zu treffen.' },
    { id: 4, title: 'Tipp 4: Blocktechniken verbessern', content: 'Lerne, richtig zu blocken, um die Angriffe der Gegner zu stoppen. Dein Timing und die Handposition sind dabei entscheidend.' },
    { id: 5, title: 'Tipp 5: Konzentration bewahren', content: 'Bleibe während des Spiels fokussiert. Verluste an Konzentration können zu unnötigen Fehlern führen.' },
    { id: 6, title: 'Tipp 6: Konterangriffe üben', content: 'Bereite dich darauf vor, Konterangriffe schnell auszuführen. Dies ist eine effektive Möglichkeit, das Spiel zu drehen.' },
];

export default function Tips() {
    return (
        <div className="tips">
            {tips.map((tip) => (
                <div key={tip.id} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h3>{tip.title}</h3>
                        </div>
                        <div className="flip-card-back">
                            <h3>{tip.title}</h3>
                            <p>{tip.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
