import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, REMOVE_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (oldstate = [], action) => {
    Object.freeze(oldstate);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return []; 
        case REMOVE_ERRORS:
            return [];
        default:
            return oldstate;
    }
}

export default sessionErrorsReducer;