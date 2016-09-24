import React, { Component } from 'react';
 
// App component - represents the whole app
export default class Dice extends Component {
	rollDie(max, min=1) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	roll(num, dsize) {
		for(i = 0; i < num; i++){
			// rollDie();
		}
	}
 
  render() {
    return (
      <div className="container">
      	<div className="title"> Dice Tray </div>
      	<a className="button is-primary">D2</a>
      	{this.rollDie(20) + 0}
      </div>
    );
  }
}