import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../actions/profile';

const AddTask = ({ addTask, history }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    info: '',
  });

  const { studentName, info } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add task</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add task to student
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addTask(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Student Name'
            name='studentName'
            value={studentName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <textarea
            name='info'
            cols='30'
            rows='5'
            placeholder='Task Information'
            value={info}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(AddTask);
