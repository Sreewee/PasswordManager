
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };

  return (
    <div className="Signup">
      <form onSubmit={submitHandler}>
        <h3>Create New Account</h3>
        <h4>Start managing your passwords securely today</h4>
        
        <label htmlFor="username">Username</label><br/>
        <input 
          onChange={(e) => setUsername(e.target.value)} 
          type="text" 
          id="username" 
          required 
        /><br/>
        
        <label htmlFor="email">Email</label><br/>
        <input 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          id="email" 
          required 
        /><br/>
        
        <label htmlFor="password">Password</label><br/>
        <input 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          id="password" 
          required 
        /><br/>
        
        <button type="button" onClick={() => navigate('/')}>
          Login
        </button>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;