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
        const user = { username: "JakeyJake", password: "fosterlove"}
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
            return (
                <div className="Auth-Container"> 
                    <div className="logo-auth">
                        Logo
                    </div>
                    <div className="whole-form">
                        <div className="login-form-container">
                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="login-form-content">
                                    <div className="login-form-header">
                                        <p className='form-descriptor'> Login </p>
                                        <li className="errors">{ this.renderErrors()}</li>
                                    </div>
                                    <div className="login-form-main">
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
                                        <div className="login-form-footer">
                                            <input type="submit" value={formType} className="submit-button"/>
                                            <br />
                                            <button className="demoUser" onClick={this.handleDemoUser}>Demo User</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
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