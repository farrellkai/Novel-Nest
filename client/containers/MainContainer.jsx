import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainContainer = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);

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
  } else if (!loggedIn && !hasAccount) {
    const registerUser = async () => {
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const conPassword = document.getElementById('conpassword').value;

      if (password !== conPassword) throw new Error('passwords do not match');

      try {
        const response = await fetch('/api/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        });

        if (!response.ok) throw new Error('something went wrong');
        else if (response.ok) {
          console.log('WE GOOD!!!');
          setLoggedIn(true);
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
          <p id="mail">Email</p>
          <input type="text" name="email" id="email" />
          <p id="pass">Password</p>
          <input type="password" name="password" id="password" />
          <p id="conpass">Confirm Password</p>
          <input type="password" name="conpassword" id="conpassword" />
          <button
            className="registerButton"
            id="registerButton"
            onClick={registerUser}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
};

export default MainContainer;
