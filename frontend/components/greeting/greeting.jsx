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
                    <h1>
                        Welcome Back {currentUser.name}!
                    </h1>
                    <button onClick={logout}> Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/login">Login</Link>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to="/signup">Sign Up</Link>
                </div>
            )
        }
    }
}

export default Greeting;