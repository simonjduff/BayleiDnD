import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/character';
import Stats from './components/stats';
import Inspiration from './components/inspiration';
import Proficiency from './components/proficiency';
import data from './m-chee-daro.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {character:data};
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
          <Character Character={this.state.character.Character} />
          <div className="column column-left">
            <Stats Stats={this.state.character.RawStats} />
          </div>
          <div className="column">
            <Inspiration Inspiration={this.state.character.Inspiration}/>
            <Proficiency Proficiency={this.state.character.Proficiencies}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
