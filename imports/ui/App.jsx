import React, { Component } from 'react';
 
import NavBar from './NavBar.jsx';
import Dice from './Dice.jsx';
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
      <div className="container">
      <NavBar />
      <Dice />
      </div>
    );
  }
}