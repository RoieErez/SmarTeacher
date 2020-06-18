import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import PostForm from './PostForm';
import { getPosts } from '../../actions/post';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Spinner from '../layout/Spinner';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 5,
  },
  list: {
    maxHeight: '500px',
    overflow: 'auto',
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  container: {},
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const Posts = ({ getPosts, post: { posts, loading } }) => {
  const classes = useStyles();
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Fragment>
      {posts === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Paper className='short-container'>
            <Typography className={classes.text} variant='h4' gutterBottom>
              Welcome to the community
            </Typography>
            <PostForm />
          </Paper>
          <Paper>
            <Fragment lassName='short-container'>
              <CssBaseline />
              <Paper square className={classes.paper}>
                <List className={classes.list}>
                  {posts.map((post) => (
                    <PostItem key={post._id} post={post} />
                  ))}
                </List>
              </Paper>
            </Fragment>
          </Paper>
        </Fragment>
      )}
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
