import React, { Component } from 'react';
 
import { Beats } from '../api/beats.js';
import { Games } from '../api/games.js';

import NavBar from './NavBar.jsx';
import Dice from './Dice.jsx';
import Story from "./Story.jsx";
import CombatTracker from "./CombatTracker.jsx";
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div className="page-container">
      <NavBar />
      <Dice />
      </div>
    );
  }
}