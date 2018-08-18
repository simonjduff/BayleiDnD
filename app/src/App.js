import React, { Component } from 'react';
import './App.css';
import Character from './components/character';
import Stats from './components/stats';
import Inspiration from './components/inspiration';
import Proficiency from './components/proficiency';
import data from './m-chee-daro.json';
import Grid from '@material-ui/core/Grid';
import Abilities from './components/abilities';
import Physical from './components/physical';
import Weapons from './components/weapons';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {character:data};
    this.state.character.RawStats =
      this.state.character.RawStats.map(s => {
        s.Modifier = Math.floor((s.Value - 10) / 2);
        return s;
    });
    this.state.character.GetModifier = (stat) => this.state.character.RawStats
      .filter(s => s.Name === stat)[0].Modifier;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Grid container spacing={24}>
            <Grid item lg={12}>
              <Character Character={this.state.character.Character} />
            </Grid>
            <Grid item lg={1}>
              <Stats Stats={this.state.character.RawStats} />
            </Grid>
            <Grid item lg={4}>
                <Inspiration Inspiration={this.state.character.Inspiration}/>
                <Proficiency Proficiency={this.state.character.Proficiencies} Stats={this.state.character.RawStats}/>
            </Grid>
            <Grid item lg={3}>
              <Grid container spacing={24}>
                <Grid item lg={12}>
                  <Physical Character={this.state.character}/>
                </Grid>
                <Grid item lg={12}>
                  <Weapons Character={this.state.character} />
                </Grid>
              </Grid>
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
