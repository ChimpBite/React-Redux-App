// root reducer to handle multiple reducers if needed

import { combineReducers } from 'redux'; // keeps reducers to be called from one resource

import articleReducer from './articles/article-reducer';

export default combineReducers({
  articles: articleReducer,
});
