import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="links">
      <Link to="/" className="dashboard" id="dashboard">
        Dashboard
      </Link>
      <Link to="/books" className="books" id="books">
        Your Books
      </Link>
      <Link to="/clubs" className="clubs" id="clubs">
        Your Book Clubs
      </Link>
    </div>
  );
};

export default Sidebar;
