import React from 'react';

const Signup = () => {
  const registerUser = async () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const conPassword = document.getElementById('conpassword').value;
  };

  return (
    <div>
      <p id="user">Username</p>
      <input type="text" name="username" id="username" />
      <p id="mail">Email</p>
      <input type="text" name="email" id="email" />
      <p id="pass">Password</p>
      <input type="password" name="password" id="password" />
      <p id="conpass">Confirm Password</p>
      <input type="password" name="conpassword" id="conpassword" />
      <button>Submit</button>
    </div>
  );
};

export default Signup;
