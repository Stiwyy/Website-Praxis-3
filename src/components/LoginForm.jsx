import React, { useState } from 'react';

export default function LoginForm({ onLogin }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Passwortvalidierung bei Registrierung
        if (isRegistering && formData.password !== formData.confirmPassword) {
            setErrorMessage('Passwörter stimmen nicht überein!');
            return;
        }

        try {
            const apiUrl = isRegistering
                ? 'http://127.0.0.1:8080/api/users/register'
                : 'http://127.0.0.1:8080/api/users/login';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const contentType = response.headers.get('content-type');
            let data;

            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = { message: await response.text() };
            }

            if (!response.ok) {
                throw new Error(data.message || 'Etwas ist schiefgelaufen.');
            }

            setSuccessMessage(data.message || 'Erfolg!');
            if (!isRegistering) {
                onLogin();
            } else {
                setIsRegistering(false);
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            }
        } catch (error) {
            console.error('Fehler bei der Anfrage:', error);
            setErrorMessage(error.message || 'Ein unerwarteter Fehler ist aufgetreten.');
        }
    };

    return (
        <div className="login-form">
            <h2>{isRegistering ? 'Registrieren' : 'Anmelden'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Benutzername:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                {isRegistering && (
                    <div>
                        <label htmlFor="email">E-Mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="password">Passwort:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {isRegistering && (
                    <div>
                        <label htmlFor="confirmPassword">Passwort bestätigen:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <button type="submit">{isRegistering ? 'Registrieren' : 'Anmelden'}</button>
            </form>
            <p>
                {isRegistering ? 'Haben Sie bereits ein Konto?' : 'Noch kein Konto?'}{' '}
                <button onClick={() => {
                    setIsRegistering(!isRegistering);
                    setErrorMessage('');
                    setSuccessMessage('');
                }}>
                    {isRegistering ? 'Anmelden' : 'Registrieren'}
                </button>
            </p>
        </div>
    );
}
