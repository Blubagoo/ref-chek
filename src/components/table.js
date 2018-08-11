import React from 'react';

import './table.css';

import Unselected from './unselected';

export default class Table extends React.Component {
	constructor(props) {
		super(props);
		console.log('table props', props);
	}
	render() {
		return (
			<div className='table'>
        <Unselected />
      </div>
		)
	}
}
