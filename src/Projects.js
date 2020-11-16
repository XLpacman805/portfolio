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
import webComponentDemoImage from './images/webComponentDemoImage.png';
import reactDrumMachineImage from './images/react-drum-machine.jpg';
import lotusFormImage from './images/lotus-form.jpg';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
      maxWidth: 800,
  },
  media: {
    height: 300,
  },
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
},
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div id="Projects">
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <h2>Side Projects</h2>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <a href="https://www.lotuscars.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                className={classes.media}
                                image={lotusFormImage}
                                title="React Form for Lotus Credit Application"
                                />
                            </a>    
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React Multi-Stage Form
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I created this form from the ground up, given only a design PSD and the business challenges needed to be solved. I chose to use React, Styled Components and Shadow DOM so I can captilize on style encapsulation, and the ease of use provided by React-App and it's tooling. The backend is a REST API written in NodeJS and ExpressJS.
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" href="https://www.lotuscars.com/apply-for-financing/" target="_blank">
                            View Live
                        </Button>
                        <Button size="small" color="primary" disabled href="https://github.com/XLpacman805/drum-machine" target="_blank">
                            See Code
                        </Button>
                    </CardActions>
                    </Card>  
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <a href="https://web-component-news-001.web.app/" target="_blank" rel="noopener noreferrer">
                            <CardMedia
                            className={classes.media}
                            image={webComponentDemoImage}
                            title="News Feed - Web Component Demo"
                            />
                        </a>    
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            News Feed - Web Component Demo
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Written without a Javascript framework, I use ES6 classes, DOM API, custom HTML elements, CSS-In-JS, Shadow DOM, Flexbox, Fetch API, and a 3rd party microservice to render web components to the DOM. It's a very simple but it demonstrates the usage of modern web technologies.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary" href="https://web-component-news-001.web.app/" target="_blank">
                        View Live
                    </Button>
                    <Button size="small" color="primary" href="https://github.com/XLpacman805/web-component-demo" target="_blank">
                        See Code
                    </Button>
                </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <a href="https://drum-machine-dot-portfolio-272305.appspot.com/" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                className={classes.media}
                                image={reactDrumMachineImage}
                                title="React Drum Machine"
                                />
                            </a>    
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                React Drum Machine
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A web application built with React using HTML, CSS, JavaScript, JS Events, DOM manipulation, JSX, ES6 classes, React and React Components. 
                                Each drumpad component has a sound to play passed through as a prop. The sounds are determined by state. 
                                Deployed to Google Cloud with App Engine and GitHub Actions. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" href="https://drum-machine-dot-portfolio-272305.appspot.com/" target="_blank">
                            View Live
                        </Button>
                        <Button size="small" color="primary" href="https://github.com/XLpacman805/drum-machine" target="_blank">
                            See Code
                        </Button>
                    </CardActions>
                    </Card>  
            </Grid>
        </Grid>  
    </div>  
  );
}
