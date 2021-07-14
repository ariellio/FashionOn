
export const createReview = (review) => {
    return $.ajax({
        url: '/api/reviews',
        method: 'POST',
        data: {review}
    })
}

export const deleteReview = (review) => {
    return $.ajax({
        url: `/api/reviews/${review.id}`,
        method: 'DESTROY',
        data: { review }
    })
}

export const updateReview = review => {
    return $.ajax({
        url: `/api/reviews/:id`,
        method: 'PATCH',
        data: { review }
    })
}

export const fetchReview = (reviewId) => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: 'GET'
    })
}
 export const fetchReviews = (itemId) => {
     return $.ajax({
         url: `/api/items/${itemId}/reviews/`,
         method: 'GET'
    })
 }
