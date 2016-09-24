import React, { Component } from 'react';
 
// App component - represents the whole app
export default class Dice extends Component {
	roll(min=1, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
 
  render() {
    return (
      <div className="container">
      	<div className="title"> Dice Tray </div>
      	<a className="button is-primary">D2</a>
      </div>
    );
  }
}