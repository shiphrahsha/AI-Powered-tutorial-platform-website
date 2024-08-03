// 
// src/components/Auth/AuthForm.js
import React, { useState } from 'react';
import '../pages/AuthForm.css';

const AuthForm = ({ navigate }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        usernameOrEmail: ''
    });

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({ username: '', email: '', password: '', usernameOrEmail: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login logic here
            console.log('Logging in with:', formData);
            // Simulate successful login
            navigate('dashboard');
        } else {
            // Handle registration logic here
            console.log('Registering with:', formData);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card-container">
                <div className="auth-card">
                    <h2 className="welcome-message">{isLogin ? 'MEMBER LOGIN' : 'REGISTER'}</h2>
                    <form className="auth-form" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                                <div className="form-group">
                                    <label>
                                        <i className="fa fa-user"></i>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>
                                        <i className="fa fa-envelope"></i>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </label>
                                </div>
                            </>
                        )}
                        {isLogin && (
                            <div className="form-group">
                                <label>
                                    <i className="fa fa-user"></i>
                                    <input
                                        type="text"
                                        name="usernameOrEmail"
                                        placeholder="Username or Email"
                                        value={formData.usernameOrEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                            </div>
                        )}
                        <div className="form-group">
                            <label>
                                <i className="fa fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <button className="submit-button" type="submit">
                            {isLogin ? 'LOGIN' : 'REGISTER'}
                        </button>
                        <div className="form-footer">
                            {isLogin ? (
                                <>
                                    <a href="#" className="forgot-password">Forgot Password?</a>
                                    <button type="button" onClick={toggleForm} className="link-button">
                                        New user? Click Here
                                    </button>
                                </>
                            ) : (
                                <button type="button" onClick={toggleForm} className="link-button">
                                    Already a user? Log in
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
