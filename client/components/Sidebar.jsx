import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to="/books" className="books" id="books">
        Your Books
      </Link>
    </div>
  );
};

export default Sidebar;
