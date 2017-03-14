import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';
import DevTools from './redux/DevTools';

const initialState=window.__INITIAL_STATE__;
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <div>
      <Provider store={store}>
    <div>
      {routes(browserHistory)}
      <DevTools />
    </div>
  </Provider>
  </div>

), document.getElementById('root'));
