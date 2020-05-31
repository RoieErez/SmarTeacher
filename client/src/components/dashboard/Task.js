import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Task = ({ task }) => {
  const tasks = task.map((tsk) => (
    <tr key={tsk._id}>
      <td>{tsk.studentName}</td>
      <td>{tsk.info}</td>
      <td>
        <button className='btn btn-danger'>Remove</button>
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
};

export default Task;
