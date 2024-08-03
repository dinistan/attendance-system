import React from 'react'
import './LoginPage.css'
import LoginImage from '../assets/login.jpg'

const LoginPage = () => {
  return (
    <div className="login-container">
        <div className="left-side">
            <img src={LoginImage} alt="Login" className="login-image" />
        </div>
        <div className="right-side">
            <h2>Student Attendance</h2>
            <p>Hey enter your details to sign in to your account</p>
            <form className="login-form">
            <div className="input-group">
                <input type="text" id="username" name="username" placeholder="Enter your username or email" />
            </div>
            <div className="input-group">
                <input type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="login-button">Login In</button>
            <div className="social-login">
                <p>Or sign in with</p>
                <button className="google-button">Google</button>
                <button className="facebook-button">Facebook</button>
            </div>
            <h3>
                Don't have an account? <a href="/" class="signup-link">Sign up now</a>
            </h3>
            </form>
        </div>
    </div>
  )
}

export default LoginPage
