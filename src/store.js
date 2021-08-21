import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import moviesReducer from './reducers/moviesReducer';

const store = createStore(moviesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;