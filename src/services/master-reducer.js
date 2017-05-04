import { combineReducers } from 'redux';
import portfolios from './portfolios/list-portfolios';
import { routerReducer } from 'react-router-redux';

export default combineReducers({ portfolios, routing: routerReducer });