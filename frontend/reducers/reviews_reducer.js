import {RECEIVE_ITEM} from '../actions/item_actions';
import {REMOVE_REVIEW} from '../actions/review_actions';

const initialState = {}

const ReviewsReducer = (state = initialState, action) => {
    Object.freeze(state)
    
    debugger
    switch (action.type) {
        case RECEIVE_ITEM:
           return action.reviews;
        case REMOVE_REVIEW:
            debugger
            let newState = Object.assign({}, state)
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }
}

export default ReviewsReducer;