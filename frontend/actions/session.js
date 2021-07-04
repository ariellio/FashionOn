import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const login = user => dispatch => {
    return SessionApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
    error => dispatch(error.responseJSON))
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout()
    .then((user) => dispatch(logoutCurrentUser()))
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON)))
}