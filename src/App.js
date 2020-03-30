import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Projects from './Projects';
import './App.css';
import HttpsRedirect from 'react-https-redirect';
import AboutMe from './AboutMe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HttpsRedirect>
        <div className="App" id="Home">
          <Navigation />
          <Header />
          <Projects />
          <AboutMe />
        </div>
      </HttpsRedirect>  
    );
  }
}

export default App;
