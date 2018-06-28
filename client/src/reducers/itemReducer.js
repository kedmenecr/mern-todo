import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from '../actions/types';
const initialState = {
	items: [
		{ id: uuid(), name: 'WS' },
		{ id: uuid(), name: 'Node' },
		{ id: uuid(), name: 'React' },
		{ id: uuid(), name: 'Deployment' },
		{ id: uuid(), name: 'RPC' },
	]
}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state
			}
		default:
			return state;
	}
}