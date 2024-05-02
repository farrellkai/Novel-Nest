import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BooksPage from '../pages/BooksPage';
import Dashboard from '../pages/Dashboard';
import ClubsPage from '../pages/ClubsPage';
import Searchbar from '../components/Searchbar';

const MainContainer = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [hasAccount, setHasAccount] = useState(true);
  const [searchData, setSearchData] = useState({});

  const getSearchData = (obj) => {
    setSearchData(obj);
  };

  const getElements = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (document.getElementById('email')) {
      const email = document.getElementById('email').value;
      const conPassword = document.getElementById('conpassword').value;
      return [username, email, password, conPassword];
    }
    return [username, password];
  };

  if (loggedIn) {
    return (
      <div id="components">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="routes">
          <div id="search">
            <Searchbar getSearchData={getSearchData} />
          </div>
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Dashboard loggedIn={loggedIn} user={user} />}
              />
              <Route
                path="/books"
                element={<BooksPage loggedIn={loggedIn} user={user} />}
              />
              <Route
                path="/clubs"
                element={<ClubsPage loggedIn={loggedIn} user={user} />}
              />
              <Route
                path="/search"
                element={<SearchPage searchData={searchData} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    );
  } else if (!loggedIn && hasAccount) {
    //logic to verify username and password are valid
    const verifyUser = async () => {
      try {
        const response = await fetch('api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: getElements()[0],
            password: getElements()[1],
          }),
        });

        if (!response.ok) throw new Error('Incorrect username or password');
        else if (response.ok) {
          setUser(getElements()[0]);
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
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
          <p id="pass">Password</p>
          <input type="password" name="password" id="password" />
          <div id="loginBtns">
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
    const allowPW = () => {
      if (getElements()[2].length < 5) console.log('TOO SHORT');
    };

    const matchPW = () => {
      if (getElements()[2] !== getElements()[3]) console.log('DO NOT MATCH');
    };

    const registerUser = async () => {
      if (getElements()[2] !== getElements()[3])
        throw new Error('passwords do not match');

      try {
        const response = await fetch('/api/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: getElements()[0],
            email: getElements()[1],
            password: getElements()[2],
          }),
        });

        if (!response.ok) throw new Error('something went wrong');
        else if (response.ok) {
          setUser(getElements()[0]);
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
          <input
            type="password"
            name="password"
            id="password"
            onKeyUp={() => allowPW()}
          />
          <p id="conpass">Confirm Password</p>
          <input
            type="password"
            name="conpassword"
            id="conpassword"
            onKeyUp={() => matchPW()}
          />
          <div id="registerBtns">
            <button
              className="registerButton"
              id="registerButton"
              onClick={registerUser}
            >
              Submit
            </button>
            <button
              className="cancelButton"
              id="cancelButton"
              onClick={() => {
                setHasAccount(true);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default MainContainer;
