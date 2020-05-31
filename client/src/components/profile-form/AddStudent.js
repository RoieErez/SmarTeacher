import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStudent } from '../../actions/profile';

const AddStudent = ({ addStudent, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    progress: 1,
    paymentAmount: '',
    current: true,
    description: '',
  });

  const {
    name,
    email,
    phone,
    location,
    progress,
    paymentAmount,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add A Student</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add Another student to your
        students collection
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addStudent(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Full Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Phone Number'
            name='phone'
            value={phone}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div classNameName='form-group'>
          <select
            name='progress'
            value={progress}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>* Select Professional Status</option>
            <option value='1'>Just started</option>
            <option value='2'>Rookie</option>
            <option value='3'>Getting the handle of things</option>
            <option value='4'>Well known</option>
            <option value='5'>Professional</option>
            <option value='6'>I have nothing to teach</option>
          </select>
          <small classNameName='form-text'>
            Please mention the student progress within his schooling program
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Amount of payment'
            name='paymentAmount'
            value={paymentAmount}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Student Description'
            value={description}
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

AddStudent.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, { addStudent })(AddStudent);
