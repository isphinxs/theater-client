import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import showsReducer from './reducers/showsReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(showsReducer, composedEnhancer);

export default store;