import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import reducers from './services/master-reducer';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './services/store';
  
const initialState = {};
const store = configureStore();
console.log(store);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
	  <Router history={history}>
	    {routes}
	  </Router>
	</Provider>,
  document.getElementById('root')
);
