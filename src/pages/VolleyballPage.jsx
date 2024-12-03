import React from 'react';
import '../styles/VolleyballPage.css'

export default function VolleyballPage() {
    return (
        <div className="volleyball-page">
            <video className="background-video" autoPlay muted loop>
                <source src="/assets/videos/background.mp4" type="video/mp4" />
                Dein Browser unterstützt kein Video.
            </video>
            <div className="content">
                <h1>Willkommen zur Volleyball-Welt!</h1>
                <p>Scrollen Sie nach unten, um mehr zu erfahren.</p>
                <div className="scroll-section">
                    <div className="row">
                        <img src="/assets/images/image1.jpg" alt="Volleyball" />
                        <p>Text zur Beschreibung des ersten Bildes.</p>
                    </div>
                    <div className="row reverse">
                        <p>Text zur Beschreibung des zweiten Bildes.</p>
                        <img src="/assets/images/image2.jpg" alt="Volleyball" />
                    </div>
                </div>
            </div>
        </div>
    );
}
