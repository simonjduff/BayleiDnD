import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/character';
import Stats from './components/stats';
import Inspiration from './components/inspiration';
import Proficiency from './components/proficiency';
import char from './m-chee-daro.json';

class App extends Component {
  componentDidMount(){
    // return fetch('m-chee-daro.json')
    //   .then(d => {
    //     console.log(`Data ${JSON.stringify(d)}`);
    //     return d;
    //   })
    //   .then(response => response.json())
    //   .then((json) => {
    //     this.setState({character: json});
    //   })
    //   .catch(e => console.log(e));
    console.log(JSON.stringify(char));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <Character />
          <div className="column column-left">
            <Stats />
          </div>
          <div className="column">
            <Inspiration />
            <Proficiency />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
