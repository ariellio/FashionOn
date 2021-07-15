
export const createReview = (review) => {
    return $.ajax({
        url: `/api/items/${review.item_id}/reviews`,
        method: 'POST',
        data: {review}
    })
}

export const deleteReview = (reviewId) => {
    
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: 'DELETE'
        // data: { review }
    })
}

export const updateReview = review => {
    return $.ajax({
        url: `/api/reviews/${review.id}`,
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
         url: `/api/reviews/${itemId}`,
         method: 'GET'
    })
 }
