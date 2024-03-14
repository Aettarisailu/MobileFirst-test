// UserLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication
    if (username === 'sailu' && password === 'password@123') {
      console.log('Login successful');
      setUsername('');
      setPassword('');
      navigate('/home'); // Redirect to home page after successful login
    } else {
      alert('Invalid credentials note: usename: sailu, password: password');
    }
  };

  return (
    <div className='app'>
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='button-container'>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
        </div>
      </form>
    </div>
    <p> Dummy credentials<br/> usename: sailu, password: password@123'</p>
    </div>
  );
};

export default UserLogin;
