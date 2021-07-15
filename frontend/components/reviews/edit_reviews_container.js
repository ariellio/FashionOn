import React from 'react'
import { connect } from 'react-redux'
import ReviewsForm from './reviews_form'
import {updateReview} from '../../actions/review_actions' 
import { fetchReview } from '../../util/review_api_util'



const mSTP = (state, ownProps) => {   
    return {
        review: state.entities.reviews[ownProps.match.params.reviewId]
    }
}

const mDTP = dispatch => {
    return {
        action: review => {
            return dispatch(updateReview(review))
        },
        fetchReview: reviewId => dispatch(fetchReview(reviewId))
    }
}

export default connect(mSTP, mDTP)(ReviewsForm)
