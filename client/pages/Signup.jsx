import React from 'react';

const Signup = () => {
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
        console.log(response);
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
};

export default Signup;
