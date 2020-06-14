import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div id="skills" className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h2>Skills</h2>
                <center>
                    <Grid item xs={12} sm={6}>
                        Skills Go here
                </Grid>
              </center>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
