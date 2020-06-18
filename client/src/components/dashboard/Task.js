import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { deleteTask } from '../../actions/profile';
import { connect } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';
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
const Task = ({ task, deleteTask }) => {
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
  const tasks = task.map((tsk) => (
    <TableRow hover key={tsk.id}>
      <TableCell>{tsk.studentName}</TableCell>
      <TableCell>{tsk.info}</TableCell>
      <TableCell>
        <Button
          onClick={() => deleteTask(tsk._id)}
          variant='contained'
          color='secondary'
        >
          Remove
        </Button>
      </TableCell>
    </TableRow>
  ));
  return (
    <Fragment>
      <CardHeader title='Students Tasks' />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Info</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{tasks}</TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Link to='/add-task'>Add Tasks</Link>
        <ArrowRightIcon />
      </CardActions>
    </Fragment>
  );
};

Task.propTypes = {
  task: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default connect(null, { deleteTask })(Task);
