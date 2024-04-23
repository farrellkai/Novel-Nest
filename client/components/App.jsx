import React from 'react';
import { Route, Routes } from 'react-router-dom';

//import pages
import SplashPage from '../pages/SplashPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import '../style.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
