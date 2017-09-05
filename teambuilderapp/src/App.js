import React, { Component } from 'react';
import './App.css';
import TeamA from './TeamA.js';
import TeamB from './TeamB.js';
import UnassignedPlayers from './UnassignedPlayers';


class App extends Component {
  constructor() {
    super();
    this.state = {
      "players": [
        {name: "Malik Robinson", id: 1},
        {name: "Chris Hamilton", id: 2},
        {name: "Miguel Hernandez", id: 3},
        {name: "Victoria Echevarria", id: 4}
      ]
    };
  }
  handleList() {
    var playersArray = this.state.players.slice();
    this.setState({
      players: playersArray
    });
  }

  render() {
    return (
      <div className="container">
        <TeamA />
        <UnassignedPlayers />
        <TeamB />
      </div>
    );
  }
}

export default App;
