import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://www.pepperi.com/wp-content/uploads/2016/06/paypal2.png'
          title='Paypal'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Paypal Connect
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Get your account connected with paypal now
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          <a href='https://www.paypal.com/il/signin?locale.x=en_IL'>Connect</a>
        </Button>
      </CardActions>
    </Card>
  );
}
