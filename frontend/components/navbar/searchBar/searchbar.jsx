import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import ItemIndex from '../../items/item_index';


class Searchbar extends Component {
    constructor(props) {
        super(props)
        this.state = {search : ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }
    
    handleKeyPress = (event) => {
        debugger
        if(event.key === 'Enter'){
            this.props.history.push(`/items/search/${this.state.search}`)
        }
      }

    handleSubmit(e) {
        e.preventDefault();

        
        this.props.history.push(`/items/search/${this.state.search}`)
        // this.props.fetchSearchResults(this.state.search).then(() => {
        //     this.props.history.push(`/search`)
        // }
        // )
    }

    handleInput(e){
        e.preventDefault();
        this.setState({search: e.currentTarget.value})
       
    }

    render() {
        
        return (
            <div className="searchBar__container">
                <div className="header__search" onSubmit={this.handleSubmit}>
                            <input className="header__searchInput" onKeyDown={this.handleKeyPress} value={this.state.search} type="text" onChange={this.handleInput}/>
                                <FontAwesomeIcon onKeyDown={this.handleKeyPress} onClick={this.handleSubmit} className="header__searchIcon" icon={faSearch} />
                </div>
            </div>
        )
    }
}

export default withRouter(Searchbar);