import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {withRouter} from 'react-router';
import ItemIndex from '../items/item_index';


class Search extends Component {
    constructor(props) {
        super(props)
        // this.state = {search : ''}
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInput = this.handleInput.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.queryString !== this.props.match.params.queryString) {
            this.props.fetchSearchResults(this.props.match.params.queryString)
        }
    }

    componentDidMount(){
        this.props.fetchSearchResults(this.props.match.params.queryString)
    }

    render() {
        return (
            <div>
               <ItemIndex items={this.props.items}/>
            </div>
        )
    }
}

export default withRouter(Search);