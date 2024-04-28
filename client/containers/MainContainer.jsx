import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainContainer = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);

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
        setLoggedIn(true);
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  if (loggedIn) {
    return (
      <div>
        <div className="sidebar">
          <Sidebar />
        </div>
        {/* <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
      </div>
    );
  } else if (!loggedIn && hasAccount) {
    return (
      <div id="wrapper">
        <div id="login">
          <p id="user">Username</p>
          <input type="text" name="username" id="username" />
          <p id="pass">Password</p>
          <input type="password" name="password" id="password" />
          <div id="login btns">
            <button
              className="loginButton"
              id="loginButton"
              onClick={verifyUser}
            >
              Login
            </button>
            <button
              className="accountButton"
              id="accountButton"
              onClick={() => {
                setHasAccount(false);
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default MainContainer;
