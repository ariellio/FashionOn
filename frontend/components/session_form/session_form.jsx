import React from 'react';
import { Link } from "react-router-dom";


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemoUser(e){
        e.preventDefault();
        const user = { username: "letsgo!!", password: "123456"}
        this.props.processForm(user)
        .then(demoUser =>  this.props.history.push("/"));
    }

    componentWillUnmount(){
        return (this.props.dispatchedRemoveErrors());
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }
  
    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li className="errors" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
    render(){
        const {formType, errors} = this.props;
        if (formType === 'login') {
            return (<div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <p className='form-descriptor'> {formType} Below ⬇️ </p>
                    <li className="errors">{ this.renderErrors()}</li>
                    <div className="login-form">
                        <label> Username:
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label> Password:
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input type="submit" value={formType} className="submit-button"/>
                    </div>
                </form>
                <button className="demoUser" onClick={this.handleDemoUser}>Demo User</button>
            </div>)
        } else if (formType === 'signup') {
            return (<div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    {this.renderErrors()}
                    <p className='form-descriptor'> Sign Up Below ⬇️ </p>
                    <div className="signup-form">
                    <label>Username
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            className="signin-input"
                        />
                    </label>
                    <br />
                    <label>Password
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="signin-input"
                        />
                    </label>
                        <br />
                        <input type="submit" value={formType} className="submit-button"/>
                    </div>
                </form>
            </div>)
        }  
    }
}

export default SessionForm;