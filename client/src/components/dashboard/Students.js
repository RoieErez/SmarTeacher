import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import {
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Students = ({ student }) => {
  const useStyles = makeStyles(() => ({
    root: {},
    content: {
      padding: 0,
    },
    inner: {
      minWidth: 600,
    },
    statusContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    status: {
      marginRight: 1,
    },
    actions: {
      justifyContent: 'flex-end',
    },
  }));

  const classes = useStyles();
  const students = student.map((std) => (
    <TableRow hover key={std.id}>
      <TableCell>{std.name}</TableCell>
      <TableCell>{std.email}</TableCell>
      <TableCell>{std.phone}</TableCell>

      <TableCell>
        <Moment format='DD/MM/YYYY'>{std.date}</Moment>
      </TableCell>
      <TableCell>
        <Button variant='contained' color='secondary'>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  ));
  return (
    <Fragment>
      <CardHeader title='My students' />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell sortDirection='desc'>
                    <Tooltip enterDelay={300} title='Sort'>
                      <TableSortLabel active direction='desc'>
                        Date
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{students}</TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color='primary' size='small' variant='text'>
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Fragment>
  );
};

Students.propTypes = {
  students: PropTypes.array.isRequired,
};

export default Students;
