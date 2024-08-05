import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import LoginImage from '../assets/login.jpg'
import './LoginPage.css'

const LoginPage = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const token = await login(username, password);
            localStorage.setItem('token', token);
            setIsLoggedIn(true);
            navigate('/home');
        } catch (e) {
            setError(e.message);
        }
    };

    
    const handleInputChange = (e) => {
        setError('');
        if (e.target.type === 'text') {
            setUsername(e.target.value);
        } else if (e.target.type === 'password') {
            setPassword(e.target.value);
        }
    };

    return (
        <div className='login'>
            <div className="login-container">
                <div className="left-side">
                    <img src={LoginImage} alt="Login" className="login-image" />
                </div>
                <div className="right-side">
                    <h2>Student Attendance</h2>
                    <p>Hey admin enter your details to sign in to your account</p>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Enter your username/email"
                                value={username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="error-message">
                            {error && <p>{error}</p>}
                        </div>
                        <button className="login-button" type="submit">Login</button>
                        <div className="social-login">
                            <p>Or sign in with</p>
                            <button className="google-button">Google</button>
                            <button className="facebook-button">Facebook</button>
                        </div>
                        <h3>
                            Don't have an account? <a href="/" className="signup-link">Sign up now</a>
                        </h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;