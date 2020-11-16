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

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div id="about-me" className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h2>About Me</h2>
                <center>
                    <Grid item xs={12} sm={6}>
                    <p>Currently I'm a <u>senior frontend developer</u> working at LiveArea CX. 
                      We're a Salesforce implementation partner, and we develop for all of the major ecommerce platforms as well.
                      I've built custom cartridges and custom business manager cartridges using <b>Javascript, HTML, CSS, ES6, Web Components, CommonJS (similar to Express), SFRA, and B2C Commerce Script. </b>
                    </p>

                    <p>
                      Although my title is senior frontend developer, <b>I spend almost 50% of my time writing server side Javascript HTTP routes for my frontend</b>, in order 
                      to perform CRUD (Create, Read, Update, Delete) operations on business manager objects, whether it be custom objects or system objects. 
                    </p>

                    <p> In total I have <u>3 years of Javascript experience</u> (including Typescript). One of those years being <b>Salesforce Commerce Cloud</b> (SFRA) development. 
                      In my last role at MXS Solutions, an up and coming digital marketing company in the automotive space, I was doing full stack Javascript development mostly in <b>NodeJS, 
                      React, Express, and MongoDB.</b> Ocassionaly I'd get an odd project where the solutions required ADF XML, Google App Script, Facebook API, or achitecting Zapier flows.  
                    </p>

                    <p>
                      For cloud technologies I'm a huge <b>Google Firebase</b> fan! I used to use Google Cloud because at MXS we used GSuite, so it made sense to stick within that ecosystem. However,
                      after using Firebase for the first time I told all my developer friends! It makes setting up a new project in the cloud so easy. I also like <b>GitHub Acitons</b> for CI/CD Pipelines.
                    </p>
                </Grid>
              </center>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
