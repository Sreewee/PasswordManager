
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="Login">
      <form onSubmit={submitHandler}>
        <h3>Login to your Account</h3>
        <h4>Access your passwords securely anytime, anywhere with our trusted password manager</h4>
        
        <label htmlFor="username">Username</label><br/>
        <input 
          onChange={(e) => setUsername(e.target.value)} 
          type="text" 
          id="username" 
          required 
        /><br/>
        
        <label htmlFor="password">Password</label><br/>
        <input 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          id="password" 
          required 
        /><br/>
        
        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate('/signup')}>
          Create New Account
        </button>
      </form>
    </div>
  );
};

export default Login;