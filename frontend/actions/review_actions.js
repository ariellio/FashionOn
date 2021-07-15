import * as ReviewApiUtil from '../util/review_api_util';


export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

export const receive_review = review => {
    debugger
    return {
        type: RECEIVE_REVIEW,
        review
    }
}
export const receive_reviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const remove_review = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const fetchReview = reviewId => dispatch => {
    
    return ReviewApiUtil.fetchReview(reviewId)
    .then(review => dispatch(receive_review(review)))
}
export const fetchReviews = itemId => dispatch => {
    
    return ReviewApiUtil.fetchReviews(itemId)
    .then(review => dispatch(receive_review(review)))
}

export const createReview = review => dispatch => {
    return ReviewApiUtil.createReview(review)
    .then( newReview => dispatch(receive_review(newReview)))
}

export const updateReview = review => dispatch => {
    return ReviewApiUtil.updateReview(review)
    .then(review => dispatch(receive_review(review)))
}

export const deleteReview = reviewId => dispatch => {
    debugger
    return ReviewApiUtil.deleteReview(reviewId)
    .then( () => dispatch(remove_review(reviewId)))
}
