import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="links">
      <Link to="/" className="page" id="dashboard">
        Dashboard
      </Link>
      <Link to="/books" className="page" id="books">
        Your Books
      </Link>
      <Link to="/clubs" className="page" id="clubs">
        Your Book Clubs
      </Link>
    </div>
  );
};

export default Sidebar;
