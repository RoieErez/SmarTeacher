import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-student' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary'></i> Add Students
      </Link>
      <Link to='/add-task' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary'></i> Add Tasks
      </Link>
    </div>
  );
};

export default DashboardActions;
