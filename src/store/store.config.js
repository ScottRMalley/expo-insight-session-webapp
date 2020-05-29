import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import bugReducer from './reducers/bug.reducer.js';

const store = createStore(bugReducer, undefined, applyMiddleware(thunkMiddleware));

export default store;