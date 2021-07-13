import React from 'react'
import { connect } from 'react-redux'
import Search from './search'
import {fetchSearchResults} from '../../actions/search_actions' 



const mSTP = (state) => {
    debugger
    return {
        items: Object.values(state.entities.search)
    }
}

const mDTP = dispatch => {
    return {
        fetchSearchResults: search => {
            
            dispatch(fetchSearchResults(search))
        }
    }
}

export default connect(mSTP, mDTP)(Search)
