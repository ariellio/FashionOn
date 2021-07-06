import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, removeErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        nav: <Link to="/signup"> Sign Up!</Link>
    }
}
const mDTP = dispatch => {
    return {
        processForm: user => dispatch(login(user)),
        dispatchedRemoveErrors: () => {
            return (dispatch(removeErrors()))
        }
    }
}

export default connect(mSTP, mDTP)(SessionForm);