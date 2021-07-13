import {RECEIVE_SEARCH_RESULTS} from '../actions/search_actions';

const initialState = {

}

const searchReducer = (state = initialState, action ) => {
    Object.freeze(state);
    
    switch (action.type) {
    // case RECEIVE_SEARCH_RESULTS:
    //     return action.searchResults
    default:
        return state
    }
}


export default searchReducer;