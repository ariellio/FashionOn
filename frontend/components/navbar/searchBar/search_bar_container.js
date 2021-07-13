import React from 'react'
import { connect } from 'react-redux'
import Searchbar from './searchbar'
import {fetchSearchResults} from '../../../actions/search_actions' 



const mSTP = (state) => {
    
    debugger
    return {
        search: state.entities.items
    }
}

const mDTP = dispatch => {
    return {
        fetchSearchResults: search => dispatch(fetchSearchResults(search))
    }
}

export default connect(mSTP, mDTP)(Searchbar)
