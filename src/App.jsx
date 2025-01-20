import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VolleyballPage from './pages/VolleyballPage';
import Gallery from './pages/Gallery';
import Tips from './pages/Tips';
import Rules from './pages/Rules';
import Positions from './pages/Positions';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <div className="app">
                {isLoggedIn && <Navbar />}
                <Routes>
                    {!isLoggedIn ? (
                        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
                    ) : (
                        <>
                            <Route path="/" element={<VolleyballPage />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/tips" element={<Tips />} />
                            <Route path="/rules" element={<Rules />} />
                            <Route path="/positions" element={<Positions />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </>
                    )}
                </Routes>
                {isLoggedIn && <Footer />}
            </div>
        </Router>
    );
}

