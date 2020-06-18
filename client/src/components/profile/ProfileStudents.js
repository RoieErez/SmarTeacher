import React from 'react';
import PropTypes from 'prop-types';

const ProfileStudents = ({ student: { name, location } }) => (
  <div>
    <p>
      <strong>Name: </strong> {name}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
  </div>
);

ProfileStudents.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileStudents;
