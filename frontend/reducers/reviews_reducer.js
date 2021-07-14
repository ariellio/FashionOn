import {RECEIVE_ITEM} from '../actions/item_actions';


const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        // case RECEIVE_ITEM:
        //    return action.reviews;
        default:
            return state
    }
}

export default ReviewsReducer;