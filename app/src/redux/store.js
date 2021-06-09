import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import articleReducer from '../redux/articles/article-reducer';

const middlewares = [thunk, logger];

const store = createStore(articleReducer, applyMiddleware(...middlewares));

export default store;
