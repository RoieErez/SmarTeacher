import React, { Fragment } from 'react';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import MoneyIcon from '@material-ui/icons/Money';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  content: {
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    fontWeight: 700,
  },
  avatar: {
    height: 56,
    width: 56,
  },
  icon: {
    height: 32,
    width: 32,
  },
  difference: {
    marginTop: 2,
    display: 'flex',
    alignItems: 'center',
  },
}));

const Budget = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Grid container justify='space-between'>
            <Grid item>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
                variant='body2'
              >
                BUDGET
              </Typography>
              <Typography variant='h3'>$14,000</Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <MoneyIcon className={classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <div className={classes.difference}>
            <ArrowUpward className={classes.differenceIcon} />
            <Typography className={classes.differenceValue} variant='body2'>
              3%
            </Typography>
            <Typography className={classes.caption} variant='caption'>
              Since last month
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default Budget;
