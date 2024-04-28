import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainContainer = () => {
  const [loggedIn, setLoggedIn] = useState(false);
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
  }
};

export default MainContainer;
