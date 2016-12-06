import React, { Component, PropTypes } from 'react';

import Dice from './Dice.jsx';
import Story from "./Story.jsx";
import CombatTracker from "./CombatTracker.jsx";

export default class Tray extends Component {
	constructor(props) {
    super(props);
    this.state = {isActive: "", openMenu:"Dice", loadedTray:""};
  }


	toggleTray() {
		if (this.state.isActive === "active"){
			this.setState({isActive: ""});
		}else{
			this.setState({isActive: "active"});
		}
	}

	trayContent(){
		if (this.state.loadedTray === ""){
			return "active";
		}else{
			return "";
		} 
	}

	loadContent(tray){
		this.setState({openMenu: tray});
	}

	renderContent(tray=""){
		if (tray === "dice") {
			return <Dice />;
		}else	if (tray === "story") {
			return <Story />;
		}else{
			return null;
		}
	}


	render() {
		return (
			<div className="container">
				<div className={"tray " + this.props.side  + " " + this.state.isActive}>
					<div className="tray-menu has-text-centered">
						<ul>
							<li className="tray-item is-tab" data-active="true">Dice</li>
							<li className="tray-item is-tab">Combat Tracker</li>
							<li className="tray-item is-tab">Spellbook</li>
							<li className="tray-item is-tab">Chat</li>
						</ul>
					</div>
					<div className={"tray-content " + this.trayContent()}>
						{this.renderContent(this.state.openMenu)}
					</div>
					<div className={"tray-toggle " + this.props.side} onClick={this.toggleTray.bind(this)}></div>
				</div>
			</div>
		)
	}
}