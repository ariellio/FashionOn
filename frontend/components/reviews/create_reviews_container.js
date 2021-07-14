import React from 'react'
import { connect } from 'react-redux'
import CreateReviewsForm from './create_reviews_form'
import {createReview} from '../../actions/review_actions' 



const mSTP = (state) => {    
    return {
        review: state.entities.reviews
    }
}

const mDTP = dispatch => {
    return {
        createReview: review => {
            debugger
            dispatch(createReview(review))
        }
    }
}

export default connect(mSTP, mDTP)(CreateReviewsForm)
