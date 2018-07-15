import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/character';
import Stats from './components/stats';
import Inspiration from './components/inspiration';
import ProficiencyBonus from './components/proficiencybonus';

class App extends Component {
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
            <ProficiencyBonus />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
