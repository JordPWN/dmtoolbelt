import React, { Component, PropTypes } from 'react';

export default class Story extends Component {

	render() {
		return (
				<div className="container">
					<input className="toggle-box" id="header1" type="checkbox" />
					<label htmlFor="header1" className="subtitle">Title</label>
					<p>
						Here's the content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content.
						 Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content. Lots of content.
					</p>
					Push me down.
				</div>
			)
	}
}