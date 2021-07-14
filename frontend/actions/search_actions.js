import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

const receiveSearchResults = searchResults => {
    
    return {
        type: RECEIVE_SEARCH_RESULTS,
        searchResults
    }
}

export const fetchSearchResults = search => dispatch => {
    
    return SearchAPIUtil.fetchSearchResults(search)
    .then( search => dispatch(receiveSearchResults(search)))
}