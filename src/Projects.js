import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import exerciseTrackerImage from './images/exercise-tracker.jpg';
import thisWebsiteImage from './images/this-website.jpg';
import urlShortenerImage from './images/url-shortener.jpg';

const useStyles = makeStyles({
  root: {
      maxWidth: 500,
  },
  media: {
    height: 300,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <div id="Projects">
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <h2>Projects (more coming soon)</h2>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={exerciseTrackerImage}
                        title="Exercise Tracker Card Media"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Exercise Tracker API
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A REST API written in JavaScript using NodeJS and MongoDB. You can use it to add user, get a list of users,and get a certain users' exercise logs. Those exercise logs can also be filtered by date rang, and response limit. Deployed on Google App Engine.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary" href="https://master-253803.appspot.com/" target="_blank">
                        Open Application
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/XLpacman805/exercise-tracker/tree/master" target="_blank">
                        See Code
                    </Button>
                </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={urlShortenerImage}
                        title="URL Shortener Microservice Media"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            URL Shortener Microservice
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            A REST API written in JavaScript using NodeJS and MongoDB. It will take a long url and return a short url. The short url, when visited redirects you to the original website. Documentation is on GitHub and can be easily tested with Postman.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary" href="https://shor10.glitch.me/api/shorturl/tlv3FtF" target="_blank">
                        Live Demo
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/XLpacman805/shor10" target="_blank">
                        See Code
                    </Button>
                </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={thisWebsiteImage}
                        title="An image that says this website wrapped in curly braces"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            This Website!
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Written in REACT using the Material-UI component library. I utilize hooks, props, and APIs to make this site. It's also deployed to Google App Engine. I planned it out using Jira, and made wireframes with Invision.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary" href="https://johnnymeza354709.invisionapp.com/freehand/portfolio-Yw2lqdfQA?v=vt1YhGHUZqBxTnYxO3N%2Fvg%3D%3D&linkshare=urlcopied" target="_blank">
                        Open Wireframes
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/XLpacman805/portfolio" target="_blank">
                        See Code
                    </Button>
                </CardActions>
                </Card>
            </Grid>
        </Grid>  
    </div>  
  );
}
