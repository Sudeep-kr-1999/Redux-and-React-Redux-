import { createStore, applyMiddleware } from 'redux';
// import cakeReducer from './cakes/cakeReducer';
import rootReducer from './rootReducer';
import logger from 'redux-logger'

// importing thunk Middleware
import thunk from 'redux-thunk';

// using redux devtools 
import { composeWithDevTools } from 'redux-devtools-extension';
// ====================================================
// for single reducer 
// const store = createStore(cakeReducer);
// ========================================================
// for multiple reducer 
// const store = createStore(rootReducer);


// we can also apply Middleware like this  
// const store = createStore(rootReducer, applyMiddleware(logger));


// with the help of  redux devtools 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

// ========================================================
export default store;


// VVI FOR REDUX DEVTOOLS 
// Github link : for redux devTOOLS:------https://github.com/zalmoxisus/redux-devtools-extension:----- Usage 1.3 section to be used here