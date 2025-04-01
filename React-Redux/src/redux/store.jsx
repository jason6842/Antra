import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
import rootReducer from './rootReducer';


// appears in the console
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// redux devTools
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;