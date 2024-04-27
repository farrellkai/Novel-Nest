import React from 'react';

const Login = () => {
  return (
    <div>
      <p id="user">Username</p>
      <input type="text" name="username" id="username" />
      <p id="pass">Password</p>
      <input type="password" name="password" id="password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
