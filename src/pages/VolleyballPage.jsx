import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import volleyballIcon from '../assets/volleyball.png';

export default function VolleyballPage() {
    const [isSticky, setIsSticky] = useState(false);
    const [showInTitle, setShowInTitle] = useState(true);
    const [ballPosition, setBallPosition] = useState(0);
    const [ballRotation, setBallRotation] = useState(0);


    const rotationFactor = 1080;

    useEffect(() => {
        const handleScroll = () => {
            const titleElement = document.querySelector('.title');
            if (titleElement) {
                const rect = titleElement.getBoundingClientRect();
                setIsSticky(rect.top <= 0);
                setShowInTitle(rect.top > 0);
            }

            const scrollPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;


            const horizontalMovement = (scrollPosition / maxScroll) * 1500;
            setBallPosition(horizontalMovement);

            const rotation = (scrollPosition / maxScroll) * rotationFactor;
            setBallRotation(rotation);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="volleyball-page">
            <div className="content">
                <h1 className="title">
                    V
                    <span
                        className={`volleyball-icon-wrapper ${
                            isSticky ? 'sticky' : ''
                        } ${showInTitle ? 'in-title' : ''}`}
                        style={{
                            transform: `translateX(${ballPosition}px) rotate(${ballRotation}deg)`,
                        }}
                    >
                        <img
                            src={volleyballIcon}
                            alt="Volleyball"
                            className="volleyball-icon"
                        />
                    </span>
                    lleyball
                </h1>
            </div>
        </div>
    );
}
