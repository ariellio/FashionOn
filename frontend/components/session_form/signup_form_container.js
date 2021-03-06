import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, removeErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        nav: <Link to="/login"> Log In!</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: user => dispatch(signup(user)),
        dispatchedRemoveErrors: () => dispatch(removeErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm);