import React, { Component, PropTypes } from 'react';

import Tray from "./Tray.jsx";

export default class NavBar extends Component {

	render() {
		return (
			<div className="wrapper">
				<nav className="nav">
					<div className="container">
						<div className="nav-left">
						<a className="nav-item">LOGO</a>
						</div>
						<div className="nav-center">
							<a href="#" className="nav-item is-tab">Menu Item 1</a>
							<a href="#" className="nav-item is-tab">Menu Item 2</a>
							<a href="#" className="nav-item is-tab">Menu Item 3</a>
						</div>
						<div className="nav-right">
						</div>
					</div>
				</nav>
				<Tray side="on-left"/>
				<Tray side="on-right"/>
			</div>
			)
	}
}