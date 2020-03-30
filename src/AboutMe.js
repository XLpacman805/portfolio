import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h2>About Me</h2>
                <center>
                    <Grid item xs={12} sm={6}>
                    <p>
                        I'm a self taught web developer and car enthusiast. My first introduction to code was HTML in a 7th grade technology class.
                    </p>

                    <p>
                        I loved the idea that I could be creative on a computer and since then it's grown into my career. I was that tech kid in class who the teachers would ask computer questions. That grew into me being the professional who executive leadership ask complexity questions to. 
                    </p>

                    <p>
                        Other than development I enjoy learning business, latest sofware development strategies, photography, and hosting car rally events for sports car enthusiasts. You can see my car club on <a href="https://www.instagram.com/sunsetrallygroup/" target="_blank" rel="noopener noreferrer">Instagram</a>.
                    </p>
                </Grid>
              </center>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
