import React from 'react'

function ReviewShow({review}) {
    debugger
    return (
        <div className="one__review">
            <div className="review__title">
                {review.title}
            </div>
            <div className="review__body">
                {review.body}
            </div>
        </div>
    )
}

export default ReviewShow
