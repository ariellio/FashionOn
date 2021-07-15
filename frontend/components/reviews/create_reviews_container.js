import React from 'react'
import { connect } from 'react-redux'
import ReviewsForm from './reviews_form'
import {createReview} from '../../actions/review_actions' 



const mSTP = (state, ownprops) => {   
    // debugger 
    return {
        review: {
            title: "",
            body: "",
            rating: 0,
            item_id: ownprops.match.params.itemId
        }
    }
}

const mDTP = dispatch => {
    return {
        action: review => {
            // debugger
            return dispatch(createReview(review))
        }
    }
}

export default connect(mSTP, mDTP)(ReviewsForm)
