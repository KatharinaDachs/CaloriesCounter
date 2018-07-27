import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import caloryReducer from './caloryReducer';

export default combineReducers({
  logins: loginReducer,
  calorie: caloryReducer,
});
