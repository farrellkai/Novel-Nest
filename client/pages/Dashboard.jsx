import React from 'react';
import '../style.css';

const Dashboard = (props) => {
  const { loggedIn } = props;
  console.log('THIS IS THE STATE, BRO!!!:', loggedIn);
  return (
    <div>
      <h1>This is the dashboard</h1>
    </div>
  );
};

export default Dashboard;
