import React from 'react';

const Signup = () => {
  return (
    <div>
      <p>Username</p>
      <input type="text" />
      <p>Email</p>
      <input type="text" />
      <p>Password</p>
      <input type="password" />
      <p>Confirm Password</p>
      <input type="password" />
      <button>Submit</button>
    </div>
  );
};

export default Signup;
