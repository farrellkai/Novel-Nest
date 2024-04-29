import React from 'react';
import '../style.css';

const Dashboard = (props) => {
  const { loggedIn, user } = props;
  return (
    <div id="dashboard">
      <h1>This is the dashboard</h1>
    </div>
  );
};

export default Dashboard;
