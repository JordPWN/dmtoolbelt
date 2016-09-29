import React, { Component } from 'react';
 
// App component - represents the whole app
export default class Dice extends Component {
  // const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

  constructor(props) {
    super(props);
  }

	rollDie(max, min=1) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	roll(max, min=1, num=1) {
    let rolls = [];
		for(i = 0; i < num; i++){
			rolls.push(rollDie(max,min));
		}
	}

  renderRoll(max, min=1) {
    const result = this.rollDie(max, min);
    return "Results: " + result + " + (" + "diemod" + ") = " + (result+5);
  }

  renderCritFail(roll) {
  }

  render() {
    return (
      <div className="container">
        <div className="content-wrapper">
        	<div className="title"> Dice Tray </div>
          <input className="input" type="number" placeholder="Start typing!" ref="diemod" />
        	<a className="button is-primary">D2</a>
        	<div className="subtitle">
            {this.renderRoll(20)}
          </div>
        </div>  
      </div>
    );
  }
}