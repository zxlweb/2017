import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import $ from 'jquery';
import NewsList from './NewsList.js';
import App from  './ManageSystem'

ReactDOM.render(<NewsList />, $('#content')[0]);
ReactDOM.render(<App />,document.getElementById('app'));




