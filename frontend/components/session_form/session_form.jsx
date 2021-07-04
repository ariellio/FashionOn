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
  

    render(){
        const {formType, errors} = this.props;
        if (formType === 'login') {
            return (<div>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <h1>{formType}</h1>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                    <input type="submit" value={formType}/>
                    <Link to="/login" />
                {/* </form> */}
            </div>)
        } else {
            return (<div>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <h1>{formType}</h1>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                    />
                    <input type="submit" value={formType} />
                    <Link to="/signup" />
                {/* </form> */}
            </div>)
        }  
    }
}

export default SessionForm;