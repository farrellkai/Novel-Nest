import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  //logic to verify username and password are valid
  const verifyUser = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      const response = await fetch('api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (!response.ok) throw new Error('Incorrect username or password');
      else if (response.ok) {
        navigate('/signup');
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <div id="wrapper">
      <div id="login">
        <p id="user">Username</p>
        <input type="text" name="username" id="username" />
        <p id="pass">Password</p>
        <input type="password" name="password" id="password" />
        <button className="loginButton" id="loginButton" onClick={verifyUser}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
