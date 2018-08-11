import React from 'react';

import './main-head.css';

export default class MainHead extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div className='main-head'>
				<h1>main-head div</h1>
			</div>
		);
	}
}
