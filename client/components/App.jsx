import React from 'react';
import { Route, Routes } from 'react-router-dom';

//import pages
import SplashPage from '../pages/SplashPage';

import '../style.css';

const App = () => {
  return (
    <div>
      <Route>
        <Route path="/" element={<SplashPage />} />
      </Route>
    </div>
  );
};

export default App;
