import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStudent } from '../../actions/profile';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Grid, Divider } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

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
      <Paper elevation={3}>
        <div className='container '>
          <Typography variant='h6' gutterBottom>
            <div className='text-center'>Add A Student</div>
          </Typography>
          <Divider />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addStudent(formData, history);
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  type='text'
                  placeholder='* Full Name'
                  name='name'
                  value={name}
                  onChange={(e) => onChange(e)}
                  required
                  label='Full Name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={email}
                  onChange={(e) => onChange(e)}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type='text'
                  placeholder='Phone Number'
                  name='phone'
                  value={phone}
                  onChange={(e) => onChange(e)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type='text'
                  placeholder='Location'
                  name='location'
                  value={location}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  name='progress'
                  value={progress}
                  onChange={(e) => onChange(e)}
                >
                  <MenuItem value='0'>* Select Professional Status</MenuItem>
                  <MenuItem value='1'>Just started</MenuItem>
                  <MenuItem value='2'>Rookie</MenuItem>
                  <MenuItem value='3'>Getting the handle of things</MenuItem>
                  <MenuItem value='4'>Well known</MenuItem>
                  <MenuItem value='5'>Professional</MenuItem>
                  <MenuItem value='6'>I have nothing to teach</MenuItem>
                </Select>
                <p classNameName='form-text'>
                  Please mention the student progress within his schooling
                  program
                </p>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type='text'
                  placeholder='Amount of payment'
                  name='paymentAmount'
                  value={paymentAmount}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </Fragment>
  );
};

AddStudent.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(null, { addStudent })(AddStudent);
