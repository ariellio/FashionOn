import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';


const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const removeErrors = () => {
    return {
        type: REMOVE_ERRORS
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors = [] )=> {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}


export const login = user => dispatch => {
    return SessionApiUtil.login(user)
    .then( user => dispatch(receiveCurrentUser(user)), 
    error => dispatch(receiveErrors(error.responseJSON))
    )
}
export const logout = () => dispatch => {
    return SessionApiUtil.logout()
    .then( user => dispatch(logoutCurrentUser())
    )
}

export const signup = user => dispatch => {
    return SessionApiUtil.signup(user)
    .then( user => dispatch(receiveCurrentUser(user)),
        error => dispatch(receiveErrors(error.responseJSON))
    )
}

