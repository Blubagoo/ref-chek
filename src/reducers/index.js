import {
	MOD_GROUP,
	REF_CHEK,
	BUILD_DECK,
	SEARCH,
	FEEDBACK,
	UNSELECTED
 } from '../actions';

const initialState = {
	view: 'LANDING',
	table: 'landing',
	signedIn: false
}

export const appReducer = (state = initialState, action) => {
	console.log('app reducing this action', action.table);
	switch (action.table) {
		case MOD_GROUP:
			console.log('mod-group case', action.table);
			return Object.assign({}, state, {
				table: 'MOD_GROUP'
			});
	  case REF_CHEK:
	  	console.log('ref-chek case');
	 		return Object.assign({}, state, {
				table: 'REF_CHEK'
			});
		case BUILD_DECK:
			return Object.assign({}, state, {
				table: 'BUILD_DECK'
			});
		case SEARCH:
			return Object.assign({}, state, {
				table: 'SEARCH'
			});
	  case FEEDBACK:
			return Object.assign({}, state, {
				table: 'FEEDBACK'
			});
		case UNSELECTED:
			return Object.assign({}, state, {
				table: 'UNSELECTED'
			})
		default:
			return state;
	}
}
