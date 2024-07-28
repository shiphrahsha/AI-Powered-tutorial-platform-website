// src/components/Auth/AuthForm.js
import React, { useState } from 'react';

const AuthForm = () => {
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
    } else {
      // Handle registration logic here
      console.log('Registering with:', formData);
    }
  };

  return (
    <div>
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
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
          <div>
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
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
