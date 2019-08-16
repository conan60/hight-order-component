import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
}));


function Movie({name,image,description,isLoading,ident}) {
  const classes = useStyles();

  return (
    <Grid item md={4} xl={3} className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar src={image} alt="avatar" className={classes.bigAvatar}/>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" component="h2">{name}</Typography> 
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}


export default Movie;