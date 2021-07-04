import { connect } from 'react-redux';
import SessionForm from './session_form';


const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login'
    }
}
const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user))
    }
}

export default connect(mSTP, mDTP)(SessionForm);