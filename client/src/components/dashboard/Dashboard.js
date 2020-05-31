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
import { Grid, Container } from '@material-ui/core';
import Sidebar from './Sidebar';
import Budget from './Budget';
import Outcome from './Outcome';
const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
        {/* the && sign is for 'if the user exist then put his name ' */}
      </p>

      {profile !== null ? (
        <Fragment>
          <Grid container spacing={4}>
            <DashboardActions />

            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <Budget />
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <Outcome />
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <LatestSales />
            </Grid>

            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Students student={profile.students} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Task task={profile.tasks} />
            </Grid>
          </Grid>
        </Fragment>
      ) : (
        <Fragment>
          <p>you have not yet setup profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
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
