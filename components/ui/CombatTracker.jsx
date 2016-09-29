import React, { Component, PropTypes } from 'react';

export default class CombatTracker extends Component {

	render() {
		return (
				<div className="container">
					<h1 className="title">Title</h1>
					<div className="card has-text-centered" id="card1">
						<div className="card-header">
							<p className="card-header-title has-text-centered">
								Character Name
							</p>
							<a class="card-header-icon">
		      			<i class="fa fa-angle-down">X</i>
		    			</a>
    				</div>
					<p className="card-content">
						Stat Block
						<h3>Notes</h3>
						<div className="notes" contentEditable="true" placeholder="Type here...!">
						Type here!	
						</div>
					</p>
					</div>


					<div className="card has-text-centered" id="card1">
						<div className="card-header">
							<p className="card-header-title has-text-centered">
								Character Name
							</p>
							<a class="card-header-icon">
		      			<i class="fa fa-angle-down">X</i>
		    			</a>
    				</div>
					<p className="card-content">
						Stat Block
						<h3>Notes</h3>
						<div className="notes" contentEditable="true" placeholder="Type here...!">
						Type here!	
						</div>
					</p>
					</div>
				</div>


			)
	}
}