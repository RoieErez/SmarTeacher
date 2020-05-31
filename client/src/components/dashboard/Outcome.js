import React, { Fragment } from 'react';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
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

const Outcome = () => {
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
                OUTCOME
              </Typography>
              <Typography variant='h3'>$8,000</Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <AttachMoneyIcon className={classes.icon} />
              </Avatar>
            </Grid>
          </Grid>
          <div className={classes.difference}>
            <ArrowDownwardIcon className={classes.differenceIcon} />
            <Typography className={classes.differenceValue} variant='body2'>
              12%
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

export default Outcome;
