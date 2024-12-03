import React from 'react';
import '../styles/Rules.css'

const rules = [
    { image: '/assets/images/rule1.jpg', text: 'Eine Mannschaft hat drei Ballkontakte.' },
    { image: '/assets/images/rule2.jpg', text: 'Der Ball darf das Netz berühren.' },
];

export default function Rules() {
    return (
        <div className="rules">
            {rules.map((rule, index) => (
                <div key={index} className="rule">
                    <img src={rule.image} alt={`Regel ${index + 1}`} />
                    <p>{rule.text}</p>
                </div>
            ))}
        </div>
    );
}
