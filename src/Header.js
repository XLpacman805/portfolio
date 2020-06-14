import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#eeeeee',
    flexGrow: 1,
    paddingTop: theme.spacing(1),
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
    fontSize: '1.3em',
  },
  buttonFont: {
      fontSize: '0.9em',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <center>
                <Avatar className={classes.large} src="https://avatars3.githubusercontent.com/u/12060907?s=460&u=3d181b7329ff78b29de17559227ca9705c0bad68&v=4" />
            </center>
        </Grid>

        <Grid item xs={1} />
        <Grid item xs={10}>
            <h1 className={classes.headline}>Full Stack Web Developer | Software Engineer | React | NodeJS | MongoDB | Salesforce | JavaScript </h1>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} md={3} xl={5}/>
        <Grid item xs={5} md={3} xl={1}>
            <Button variant="contained" color="primary" size="medium" fullWidth={true} href="#Projects">
                View Projects
            </Button>
        </Grid>
        <Grid item xs={5} md={3} xl={1}>
            <Button variant="contained" color="secondary" size="medium" fullWidth={true} href="https://drive.google.com/file/d/12A-ihpeSPp5UYyHtXb8zLK6bGq6XlTmL/view?usp=sharing" target="_blank">
                See My Resume
            </Button>
        </Grid>
        <Grid item xs={1} md={3} xl={5}/>

        <Grid item xs={12}>
            <center>
                <Link href="https://www.linkedin.com/in/johnny-meza-9641b8139/" target="_blank" rel="noopener">View LinkedIn</Link>
            </center>
        </Grid>
      </Grid>
      </Paper>
    </div>
  );
}
