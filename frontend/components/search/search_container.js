import React from 'react'
import { connect } from 'react-redux'
import Search from './search'
import {fetchSearchResults} from '../../actions/search_actions' 



const mSTP = (state) => {
    
    
    return {
        items: Object.values(state.entities.items)
    }
}

const mDTP = dispatch => {
    return {
        fetchSearchResults: search => {
            return dispatch(fetchSearchResults(search))
        }
    }
}

export default connect(mSTP, mDTP)(Search)
