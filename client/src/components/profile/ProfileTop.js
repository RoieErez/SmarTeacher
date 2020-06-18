import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Avatar, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    gridArea: 'top',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: theme.spacing(1),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: '0 auto ',
    marginBottom: '30px',
  },
  socialButtons: {
    margin: theme.spacing(1),
    gridArea: 'top',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Avatar aria-label='profile' className={classes.avatar} src={avatar} />
        <Divider />
        <h1 className='profile-top large'>{name}</h1> <Divider />
        <Typography variant='h4' className='profile-top' gutterBottom>
          {status}
        </Typography>
        <ListItem className={classes.socialButtons}>
          {social && social.twitter && (
            <Fab
              size='small'
              href={social.twitter}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter fa-2x' />
            </Fab>
          )}
          {social && social.facebook && (
            <Fab
              size='small'
              href={social.facebook}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook fa-2x' />
            </Fab>
          )}
          {social && social.youtube && (
            <Fab
              size='small'
              href={social.youtube}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-youtube fa-2x' />
            </Fab>
          )}
          {social && social.instagram && (
            <Fab
              size='small'
              href={social.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x' />
            </Fab>
          )}
          {social && social.linkedin && (
            <Fab
              size='small'
              href={social.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x' />
            </Fab>
          )}
        </ListItem>
      </CardContent>
    </Card>
    // <div className='profile-top bg-primary p-2'>
    //   <img className='round-img my-1' src={avatar} alt='' />
    //

    //   <p>{location && <span>{location}</span>}</p>
    //   <div className='icons my-1'>
    //     {website && (
    //       <a href={website} target='_blank' rel='noopener noreferrer'>
    //         <i className='fas fa-globe fa-2x' />
    //       </a>
    //     )}
    //     {social && social.twitter && (
    //       <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-twitter fa-2x' />
    //       </a>
    //     )}
    //     {social && social.facebook && (
    //       <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-facebook fa-2x' />
    //       </a>
    //     )}
    //     {social && social.linkedin && (
    //       <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-linkedin fa-2x' />
    //       </a>
    //     )}
    //     {social && social.youtube && (
    //       <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-youtube fa-2x' />
    //       </a>
    //     )}
    //     {social && social.instagram && (
    //       <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
    //         <i className='fab fa-instagram fa-2x' />
    //       </a>
    //     )}
    //   </div>
    // </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
