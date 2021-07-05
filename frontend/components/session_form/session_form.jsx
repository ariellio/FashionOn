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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value})
    }
  
    renderErrors(){
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }
    render(){
        const {formType, errors} = this.props;
        if (formType === 'login') {
            return (<div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <h3> Please {formType} Below</h3>
                    <label> Username
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <br />
                    <label> Password
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <input type="submit" value={formType}/>
                    {/* <Link to="/login" /> */}
                </form>
            </div>)
        } else {
            return (<div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Please {formType} Below</h3>
                    <label>Username
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    <br />
                    <label>Password
                            <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <input type="submit" value={formType} />
                    {/* <Link to="/signup" /> */}
                </form>
            </div>)
        }  
    }
}

export default SessionForm;