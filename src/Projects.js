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
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <h2>Projects</h2>
        </Grid>

        <Grid item xs={12}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://via.placeholder.com/500"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Exercise Tracker API
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A REST API written in JavaScript using NodeJS and MongoDB. You can use it to add user, get a list of users,and get a certain users' exercise logs. Those exercise logs can also be filtered by date rang, and response limit. 
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Open Application
                </Button>
                <Button size="small" color="primary">
                    See Code
                </Button>
            </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://via.placeholder.com/500"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        URL Shortener Microservice
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A REST API written in JavaScript using NodeJS and MongoDB. It will take a long url and return a short url. The short url, when visited redirects you to the original website.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Open Application
                </Button>
                <Button size="small" color="primary">
                    See Code
                </Button>
            </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://via.placeholder.com/500"
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        This Portfolio!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Written in REACT using the Material-UI component library. I utilize hooks, props, and APIs to make this site. It's also deployed to Google App Engine. I planned it out using Jira, and made wireframes with Invision.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Open wireframes
                </Button>
                <Button size="small" color="primary">
                    See Code
                </Button>
            </CardActions>
            </Card>
        </Grid>
    </Grid>    
  );
}
