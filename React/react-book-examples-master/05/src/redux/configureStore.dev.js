import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer,routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import createFetchMiddleware from 'redux-composable-fetch';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './DevTools';

// const FetchMiddleware = createFetchMiddleware({
//   afterFetch({ action, result }) {
//     return result.json().then(data => {
//       return Promise.resolve({
//         action,
//         result: data,
//       });
//     });
//   },
// });

const middlewear=routerMiddleware(browserHistory);
const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleware,middlewear),
  DevTools.instrument()
)(createStore);
// routerReducer function stores location updates from history,if you use combineReducers ,it should be nested under the  routing  key 
const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store;
}
