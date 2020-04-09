import { combineReducers } from 'redux-immutable';

import { reducer as structureReducer } from '../pages/structure/store';
const reducer = combineReducers({
	structure:structureReducer
});
export default reducer