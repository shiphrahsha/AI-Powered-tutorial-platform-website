// src/components/Auth/AuthForm.js
import React, { useState } from 'react';
import '../pages/AuthForm.css';

const AuthForm = ({ navigate }) => {
    const navigateToLogin = () => {
        navigate('dashboard');

    };
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
        <div className="auth-card">
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            {isLogin ? (
              <div className="form-group">
                <label>Username or Email</label>
                <input
                  type="text"
                  name="usernameOrEmail"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  required
                />
              </div>
            ) : null}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="submit-button" type="submit" onClick={navigateToLogin}>
              {isLogin ? 'Login' : 'Register'}
            </button>
            <div className="toggle-link">
              {isLogin ? (
                <button type="button" onClick={toggleForm} className="link-button">
                  New user? Create an account
                </button>
              ) : (
                <button type="button" onClick={toggleForm} className="link-button">
                  Already a user? Log in
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default AuthForm;