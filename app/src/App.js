import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './components/character';
import Stats from './components/stats';
import Inspiration from './components/inspiration';
import Proficiency from './components/proficiency';
import data from './m-chee-daro.json';
import Grid from '@material-ui/core/Grid';
import Abilities from './components/abilities';

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
          <Grid container spacing={24}>
            <Grid item lg={8}>
              <Character Character={this.state.character.Character} />
            </Grid>
          </Grid>
          <Grid container spacing={8}>
            <Grid item>
              <Stats Stats={this.state.character.RawStats} />
            </Grid>
            <Grid item lg={4}>
                <Inspiration Inspiration={this.state.character.Inspiration}/>
                <Proficiency Proficiency={this.state.character.Proficiencies}/>
            </Grid>
            <Grid item lg={4}>
              <Abilities Abilities={this.state.character.Abilities} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
