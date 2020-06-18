import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import { Grid } from '@material-ui/core';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <p className='lead'>
            <i class='fa fa-plug' aria-hidden='true'></i> Browese and connect
          </p>
          <Grid container spacing={4}>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <Grid item lg={4} sm={6} xl={4} xs={12}>
                  <ProfileItem key={profile._id} profile={profile} />
                </Grid>
              ))
            ) : (
              <Spinner />
            )}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
