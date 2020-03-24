import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Projects from './Projects';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
