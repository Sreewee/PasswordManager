import React from 'react'

const App = () => {
  return (
    <div><div className="Login">
    <form>
        <h3>Login to your Account</h3>
        <h4>Access your passwords securely anytime, anywhere with our trusted password manager</h4>
        
        <label htmlFor="username">Username</label><br/>
        <input type="text" id="username" name="username" /><br/>
        
        <label htmlFor="email">Email</label><br/>
        <input type="email" id="email" name="email" /><br/>
        
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="password" name="password" /><br/>
        
        <button type="submit">Submit</button>
    </form>
</div></div>
  )
}

export default App