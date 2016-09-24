import React, { Component, PropTypes } from 'react';

export default class NavBar extends Component {

	render() {
		return (
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
			)
	}
}