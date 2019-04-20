import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux'; // 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.

import rootReducer from '../reducers';
export const history = createHistory();



function configureStoreTest(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
   
    thunk,
    reactRouterMiddleware,
  ];

  let store =  createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
  return { store}
}


const configureStore = configureStoreTest

export default configureStore;
