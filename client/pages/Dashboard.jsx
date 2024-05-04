import React from 'react';
import '../style.css';

const Dashboard = (props) => {
  const { loggedIn, userID } = props;
  console.log('THIS IS THE USER STATE:', userID);
  return (
    <div id="dashboard">
      <h1>This is the dashboard</h1>
      <button onClick={() => console.log(userID)}>check state</button>
    </div>
  );
};

export default Dashboard;
