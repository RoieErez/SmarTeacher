import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Students from './Students';
import Task from './Task';
import LatestSales from './LatestSales';
import { getCurrentProfile } from '../../actions/profile';
import { Grid } from '@material-ui/core';

import Budget from './Budget';
import Outcome from './Outcome';
import MediaCard from './MediaCard';
//import UsersByDevice from './UsersByDevice';
import Updates from './Updates';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return profile === null && loading ? (
    <Spinner />
  ) : (
    <div>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
        {/* the && sign is for 'if the user exist then put his name ' */}
      </p>
      {profile !== null ? (
        <Grid container spacing={4}>
          <DashboardActions />
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <Budget />
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <Outcome />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <LatestSales />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <Updates />
          </Grid>
          <Grid item lg={6} md={6} xl={3} xs={12}>
            <MediaCard />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Students student={profile.students} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Task task={profile.tasks} />
          </Grid>
        </Grid>
      ) : (
        <Fragment>
          <p>you have not yet setup profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
