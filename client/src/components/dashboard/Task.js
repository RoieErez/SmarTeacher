import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { deleteTask } from '../../actions/profile';
import { connect } from 'react-redux';
const Task = ({ task, deleteTask }) => {
  const tasks = task.map((tsk) => (
    <tr key={tsk._id}>
      <td>{tsk.studentName}</td>
      <td>{tsk.info}</td>
      <td>
        <button onClick={() => deleteTask(tsk._id)} className='btn btn-danger'>
          Remove
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Students Tasks</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Info</th>
            <th />
          </tr>
        </thead>
        <tbody>{tasks}</tbody>
      </table>
    </Fragment>
  );
};

Task.propTypes = {
  task: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default connect(null, { deleteTask })(Task);
