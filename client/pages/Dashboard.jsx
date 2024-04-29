import React from 'react';
import '../style.css';

const Dashboard = (props) => {
  const { loggedIn, user } = props;
  return (
    <div>
      <h1>This is the dashboard</h1>
    </div>
  );
};

export default Dashboard;
