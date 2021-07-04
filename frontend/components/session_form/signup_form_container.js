import { connect } from 'react-redux';
import SessionForm from './session_form';

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'signup'
    }
}

const mDTP = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);