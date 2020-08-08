import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import legacyFrontEnd from './images/legacy-front-end.jpg';
import javascriptAlgorithmsDataStructures from './images/javascript-algorithms-data-structures.jpg';
import apisAndMicroservices from './images/apis-microservices.jpg';
import frontEndLibrariesCertificate from './images/front-end-libraries-certificate.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    media: {
        height: 300,
    },
    card: {
        maxWidth: 800,
    },
}));

export default function Certifications() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h2>Certifications</h2>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <a href="https://www.udemy.com/certificate/UC-956f038c-604a-47fb-8b96-3a8170228440/" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    className={classes.media}
                                    image='https://udemy-certificate.s3.amazonaws.com/image/UC-956f038c-604a-47fb-8b96-3a8170228440.jpg'
                                    title="Progressive Web Apps (PWA) Certificate of Completion"
                                />
                            </a>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Progressive Web Apps (PWA) Certificate of Completion
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                This certificate above verifies that Johnny Meza successfully completed the course Progressive Web Apps (PWA) - The Complete Guide on 08/07/2020 as taught by Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller on Udemy. The certificate indicates the entire course was completed as validated by the student.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://www.udemy.com/certificate/UC-956f038c-604a-47fb-8b96-3a8170228440/" target="_blank">
                                Verify
                                </Button>
                            <Button size="small" color="primary" href="https://www.udemy.com/course/progressive-web-app-pwa-the-complete-guide/" target="_blank">
                                Learn More
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>


                <Grid item xs={12} sm={6} lg={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <a href="https://www.freecodecamp.org/certification/xlpacman805/front-end-libraries" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    className={classes.media}
                                    image={frontEndLibrariesCertificate}
                                    title="FreeCodeCamp Front End Libraries Certificate"
                                />
                            </a>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Front End Libraries
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Developer Certification, representing approximately 300 hours of coursework. Earned by completing exercises and final projects using React, jQuery, Sass/Scss, Redux, and JavaScript for front end UI development. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://www.freecodecamp.org/certification/xlpacman805/front-end-libraries" target="_blank">
                                Verify
                                </Button>
                            <Button size="small" color="primary" href="https://guide.freecodecamp.org/certifications/" target="_blank">
                                Learn More
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <a  href="https://www.freecodecamp.org/certification/xlpacman805/apis-and-microservices" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    className={classes.media}
                                    image={apisAndMicroservices}
                                    title="FreeCodeCamp APIs and Microservices Certificate"
                                />
                            </a>    
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    APIs and Microservices
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Developer Certification, representing approximately 300 hours of coursework. Earned by completing exercises and projects using NodeJS, and Express.js to demonstrate ability of developing REST APIs. 
                                     </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://www.freecodecamp.org/certification/xlpacman805/apis-and-microservices" target="_blank">
                                Verify
                                </Button>
                            <Button size="small" color="primary" href="https://guide.freecodecamp.org/certifications/" target="_blank">
                                Learn More
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <a href="https://www.freecodecamp.org/certification/xlpacman805/javascript-algorithms-and-data-structures" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    className={classes.media}
                                    image={javascriptAlgorithmsDataStructures}
                                    title="JavaScript Algorithms and Data Structures"
                                />
                            </a>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    JavaScript Algorithms and Data Structures
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Developer Certification, representing approximately 300 hours of coursework. Earned by completing exercises and projects using common algorithms and data structures.
                                     </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://www.freecodecamp.org/certification/xlpacman805/javascript-algorithms-and-data-structures" target="_blank">
                                Verify
                                </Button>
                            <Button size="small" color="primary" href="https://guide.freecodecamp.org/certifications/" target="_blank">
                                Learn More
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <a href="https://www.freecodecamp.org/certification/xlpacman805/legacy-front-end" target="_blank" rel="noopener noreferrer">
                                <CardMedia
                                    className={classes.media}
                                    image={legacyFrontEnd}
                                    title="Free Code Camp Legacy Front End Developer Certificate"
                                />
                            </a>    
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Front End Developer Certificate
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Developer Certification, representing approximately 400 hours of coursework. Earned by completing exercises and projects using HTML, CSS, JavaScript, Jquery, and Bootstrap. 
                                     </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" href="https://www.freecodecamp.org/certification/xlpacman805/legacy-front-end" target="_blank">
                                Verify
                                </Button>
                            <Button size="small" color="primary" href="https://guide.freecodecamp.org/certifications/" target="_blank">
                                Learn More
                                </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </div >
    );
}
