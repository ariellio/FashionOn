import React from 'react';
import { Link } from 'react-router-dom';


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
                <div className="login-or-signup">
                    <span className="welcome__message">
                        Hello, Guest
                    </span>
                    <span className="link__to__login__signup">
                        <Link to="/login">Login</Link> or <Link to="/signup">Sign up!</Link>
                    </span>
                </div>
            )
        }
    }
}

export default Greeting;