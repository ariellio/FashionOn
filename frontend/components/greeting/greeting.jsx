import React from 'react';
import { Link } from 'react-router-dom';
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Greeting extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { currentUser,logout } = this.props;

        if (currentUser) {
            return(
                <div className="greeting__container">
                    <span className="greeting__message">
                        Hello {currentUser.username}!
                    </span>
                    <button onClick={logout}> Logout</button>
                </div>
            )
        } else {
            return (

                <div className="dropdown">
                    <span className="welcome__message__one">
                        Hello, Sign in
                    </span>
                    <span className="welcome__message__two">
                        Account & Lists 
                        <FontAwesomeIcon className="header__sortIcon" icon={faSortDown} />
                    </span>

                    <div className="dropdown__content">
                     <span className="link__to__login">
                        <Link to="/login"><button className="login__signup__buttons">Sign In</button></Link>
                     </span>
                     <span className="link__to__signup">
                            New customer? <Link to="/signup"> Start here.</Link>
                     </span>

                     <div className="footer__line">

                     </div>
              </div>
                </div>
                // <div className="login-or-signup">
                //     <span className="welcome__message">
                //         Hello, Guest
                //     </span>
                //     <span className="link__to__login__signup">
                //         <Link to="/login">Login</Link> or <Link to="/signup">Sign up!</Link>
                //     </span>
                // </div>
            )
        }
    }
}

export default Greeting;