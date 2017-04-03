import { combineReducers } from 'redux';
import authenticated from './authenticated';

const rootReducer = combineReducers({
  authenticated
});

export default rootReducer;
