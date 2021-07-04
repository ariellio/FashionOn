import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session';

const sessionsReducer = (oldState= {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {id: action.currentUser.id}
        case LOGOUT_CURRENT_USER:
            return {id: null}
        default:
            return oldState;
    }
}

export default sessionsReducer;