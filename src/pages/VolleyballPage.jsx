import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import volleyballIcon from '../assets/volleyball.png';

export default function VolleyballPage() {
    const [isSticky, setIsSticky] = useState(false);
    const [showInTitle, setShowInTitle] = useState(true);
    const [ballPosition, setBallPosition] = useState(0);
    const [ballRotation, setBallRotation] = useState(0);
    const [startOffset, setStartOffset] = useState(0);

    const rotationFactor = 1080;

    useEffect(() => {
        const handleScroll = () => {
            const titleElement = document.querySelector('.title');
            if (titleElement) {
                const rect = titleElement.getBoundingClientRect();
                const stickyNow = rect.top <= 0;
                setIsSticky(stickyNow);
                setShowInTitle(rect.top > 0);

                const scrollPosition = window.scrollY;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

                const horizontalMovement =
                    startOffset + (scrollPosition / maxScroll) * 800;
                setBallPosition(horizontalMovement);

                const rotation = (scrollPosition / maxScroll) * rotationFactor;
                setBallRotation(rotation);
            }
        };

        const calculateStartOffset = () => {
            const titleElement = document.querySelector('.title');
            if (titleElement) {
                const rect = titleElement.getBoundingClientRect();
                const centerX = window.innerWidth / 2;
                const ballCenterX = rect.left + rect.width / 2;
                setStartOffset(ballCenterX - centerX);
            }
        };

        calculateStartOffset();
        window.addEventListener('resize', calculateStartOffset);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', calculateStartOffset);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [startOffset]);

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
                <div className="intro">
                    <h2>Willkommen auf deiner Anlaufstelle für Volleyball-Enthusiasten!</h2>
                    <p>
                        Tauche ein in die Welt des Volleyballs, wo Dynamik, Leidenschaft und Präzision
                        aufeinandertreffen.
                        </p>
                </div>

                <div style={{height: '100vh'}}/>

                <div className="video-container">
                    <video width="100%" height="auto" controls>
                        <source src="/assets/Einschlagen.webm" type="video/webm"/>
                        Dein Browser unterstützt das Video-Tag nicht.
                    </video>
                </div>
            </div>
        </div>
    );
}
