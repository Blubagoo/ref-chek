export const MOD_GROUP = 'MOD_GROUP';
export const REF_CHEK = 'REF_CHEK';
export const BUILD_DECK = 'BUILD_DECK';
export const SEARCH = 'SEARCH';
export const FEEDBACK = 'FEEDBACK';
export const POPULATE_TABLE = 'POPULATE_TABLE';
export const CHANGE_TABLE_VIEW = 'CHANGE_TABLE_VIEW';
export const UNSELECTED = 'UNSELECTED';

export const changeTableView = table => {
	console.log('table view', table);
	return ({
		type: CHANGE_TABLE_VIEW,
		table
	})
}

