import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from "../reducers/userReducer";
import { addUser } from "../actions/session";

const configureStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, applyMiddleware(thunk));
}



export default configureStore;
