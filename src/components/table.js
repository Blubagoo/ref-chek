import React from 'react';
import { connect } from 'react-redux';

import './table.css';

import {
	MOD_GROUP,
	REF_CHEK,
	BUILD_DECK,
	SEARCH,
	FEEDBACK,
	UNSELECTED
} from '../actions';

import Unselected from './unselected';
import ModGroup from './mod-group';
import RefChek from './ref-chek';
import BuildDeck from './build-deck';
import Search from './search';
import Feedback from './feedback';
import Landing from './landing';

export class Table extends React.Component {
	render() {
		switch (this.props.table) {
			case MOD_GROUP:
				return (
					<div className='table'>
		        <ModGroup />
		      </div>
				);
			case REF_CHEK:
				return (
					<div className='table'>
						<RefChek />
					</div>
				);
			case BUILD_DECK:
				return (
					<div className='table'>
						<BuildDeck />
					</div>
				);
			case SEARCH:
				return (
					<div className='table'>
						<Search />
					</div>
				);
			case FEEDBACK:
				return (
					<div className='table'>
						<Feedback />
					</div>
				)
			case UNSELECTED:
				return (
					<div className='table'>
						<Unselected />
					</div>
				)
			default:
				return (
					<div className='table'>
		        <Landing />
		      </div>
				);
		}
	}
}

export default connect()(Table);
