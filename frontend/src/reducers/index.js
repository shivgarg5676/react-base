// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import { routerReducer } from 'react-router-redux';
 import commonReducer from "./common";

 export default combineReducers({
    routing: routerReducer,
    common: commonReducer,
  });
