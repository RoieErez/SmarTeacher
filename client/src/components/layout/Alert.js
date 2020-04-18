import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Swal from 'sweetalert2';
//TODO
//sweet alert type add later
// Swal.fire({
//   icon: 'error',
//   title: 'Oops...',
//   text: alert.msg,
// })
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
