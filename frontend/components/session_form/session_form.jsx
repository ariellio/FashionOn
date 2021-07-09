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
                        <Link to='/'>
                            <img height="100" src="https://lh3.googleusercontent.com/5gfxy4BELemetG70hP3lfs3YS_xWQMxKHwp-bKm5q2-_PyCBP6rEN-s5rt0LVUUP5_XH84YELyjaSrnXHsKdp3Cz3391mhROcuy5Ho_zG-BKEh-oQjG42j3DHPPJNthYZ9pYhS5sSw=w500-h315-p-k" />
                        </Link>
                    </div>
                    <div className="whole-form">
                        <div className="login-form-container">
                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="login-form-content">
                                    <div className="login-form-header">
                                        <p className='form-descriptor'> Sign-In </p>
                                        <li className="errors">{ this.renderErrors()}</li>
                                    </div>
                                    <div className="login-form-main">
                                        <div>
                                            <label className="login-form-main-content"> Username:
                                            
                                        <div className="username=input">
                                            <br />
                                            <input 
                                                type="text"
                                                value={this.state.username}
                                                onChange={this.update('username')}
                                                className="login-input"
                                            />
                                        </div>
                                        </label>
                                        </div>
                                        <br />
                                        <label className="login-form-main-content"> Password:
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
                    <div className="switch-to-other-form">
                            <p>New to FashionOn?</p>
                            <div>
                                <Link to="/signup"><button className="switchFormsButton">Create Your FashionOn Account</button> </Link>
                            </div>
                    </div>
                    <div className="form-footer">
                        <div className="form-footer-items">
                            <p className="form-footer-item-ps">Conditions of Use</p>
                            <p className="form-footer-item-ps">Privacy Notice</p>
                            <p className="form-footer-item-ps">Help</p>
                        </div>
                    </div>
                </div>)
        } else if (formType === 'signup') {
            return(
            <div className="Auth-Container">
                    <div className="logo-auth">
                        <Link to='/'>
                            <img height="100" src="https://lh3.googleusercontent.com/5gfxy4BELemetG70hP3lfs3YS_xWQMxKHwp-bKm5q2-_PyCBP6rEN-s5rt0LVUUP5_XH84YELyjaSrnXHsKdp3Cz3391mhROcuy5Ho_zG-BKEh-oQjG42j3DHPPJNthYZ9pYhS5sSw=w500-h315-p-k" />
                        </Link>
                    </div>
                    <div className="whole-form">
                        <div className="login-form-container">
                            <form onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="login-form-content">
                                    <div className="login-form-header">
                                        <p className='form-descriptor'> Create Account </p>
                                        <li className="errors">{this.renderErrors()}</li>
                                    </div>
                                    <div className="login-form-main">
                                        <label className="login-form-main-content"> Username:
                                            <input
                                                type="text"
                                                value={this.state.username}
                                                onChange={this.update('username')}
                                                className="login-input"
                                            />
                                        </label>
                                        <br />
                                        <label className="login-form-main-content"> Password:
                                            <input
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.update('password')}
                                                className="login-input"
                                            />
                                        </label>
                                        <br />
                                        {/* make separate component for footer */}
                                        <div className="login-form-footer">
                                            <input type="submit" value={formType} className="submit-button" />
                                            <br />
                                            {/* <button className="demoUser" onClick={this.handleDemoUser}>Demo User</button> */}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="switch-to-other-form">
                        <p>Already have an account?</p>
                        <div>
                            <Link to="/login"><button className="switchFormsButton">Login To Your FashionOn Account</button> </Link>
                        </div>
                    </div>
                    <div className="form-footer">
                        <div className="form-footer-items">
                            <p className="form-footer-item-ps">Conditions of Use</p>
                            <p className="form-footer-item-ps">Privacy Notice</p>
                            <p className="form-footer-item-ps">Help</p>
                        </div>
                    </div>
                </div>)
            
            
            
            
            
            
            
            // return (<div className="signup-form-container">
            //     <form onSubmit={this.handleSubmit} className="signup-form-box">
            //         {this.renderErrors()}
            //         <p className='form-descriptor'> Create Account  </p>
            //         <div className="signup-form">
            //         <label>Username
            //             <input
            //                 type="text"
            //                 value={this.state.username}
            //                 onChange={this.update('username')}
            //                 className="signin-input"
            //             />
            //         </label>
            //         <br />
            //         <label>Password
            //                 <input
            //                 type="password"
            //                 value={this.state.password}
            //                 onChange={this.update('password')}
            //                 className="signin-input"
            //             />
            //         </label>
            //             <br />
            //             <input type="submit" value={formType} className="submit-button"/>
            //         </div>
            //     </form>
            // </div>)
        }  
    }
}

export default SessionForm;