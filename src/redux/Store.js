import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reducer from './Reducers/indexReducer';

const initialState = {};
const middleware = [thunk];

const Store = createStore(Reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default Store;
