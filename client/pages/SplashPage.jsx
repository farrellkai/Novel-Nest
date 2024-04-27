import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

const SplashPage = () => {
  return (
    <div>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default SplashPage;
