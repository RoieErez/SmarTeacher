import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, grey } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PublicIcon from '@material-ui/icons/Public';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Divider } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
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
    backgroundColor: grey[500],
  },
}));

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    bio,
    social,
    status,
    location,
    website,
    skills,
  },
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label='profile'
            className={classes.avatar}
            src={avatar}
          />
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={status}
      />
      <CardMedia
        className={classes.media}
        image='https://i.ibb.co/pfdkJPV/brand-logo.png'
        title='SmartTeacher'
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          <List>
            <ListItem>
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
            <Divider />
            <ListItem>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText>{location}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarBorderIcon />
              </ListItemIcon>
              <ListItemText>{website}</ListItemText>
            </ListItem>
          </List>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='share' href={website} title='Go to Website'>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
          title='Show skills'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <List>
            <ListItemText>Skills</ListItemText>
            <Divider />
            {skills.slice(0, 4).map((skill, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <AttachFileIcon />
                </ListItemIcon>
                <ListItemText>{skill}</ListItemText>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
