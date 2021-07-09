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
                <div>
                    <h1 className="greeting">
                        Welcome Back {currentUser.username}!
                    </h1>
                    <button onClick={logout}> Logout</button>
                </div>
            )
        } else {
            return (
                <div className="login-or-signup">
                    <Link to="/login">Login</Link>
                        &nbsp;or&nbsp;
                    <Link to="/signup">Sign up!</Link>
                </div>
            )
        }
    }
}

export default Greeting;