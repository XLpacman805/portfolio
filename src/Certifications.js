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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    media: {
        height: 140,
    },
    card: {
        maxWidth: 345,
    },
}));

export default function Certifications() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h2>Certifications</h2>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={legacyFrontEnd}
                                title="Free Code Camp Legacy Front End Developer Certificate"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Front End Developer Certificate
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Developer Certification, representing approximately 400 hours of coursework. Earned by completing exercises using HTML, CSS, JavaScript, Jquery, and Bootstrap. 
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
