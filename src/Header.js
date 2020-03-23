import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
  large: {
    width: '50vw',
    maxWidth: 384,
    height: 'auto',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  headline: {
    color: theme.palette.text.primary,
    textAlign: 'center',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <center>
                <Avatar className={classes.large} src="https://avatars3.githubusercontent.com/u/12060907?s=460&u=3d181b7329ff78b29de17559227ca9705c0bad68&v=4" />
            </center>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={10}>
            <h3 className={classes.headline}>Full Stack Web Developer | Software Engineer | React | NodeJS | Salesforce | Javascript | DevOps | Front End | Back End </h3>
        </Grid>
        <Grid item xs={1} />

      </Grid>
    </div>
  );
}
