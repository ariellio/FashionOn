import React from 'react';
import {Link} from 'react-router-dom';
import DeleteReview from './delete_review';

function ReviewShow({review, deleteReview}) {


    
    // debugger
    return (
        <div className="one__review">
            <div className="review__title">
                {review.title}
            </div>
            <div className="review__body">
                {review.body}
                {/* <button onClick={review}>Edit Review</button> */}
                <Link to={`/reviews/${review.id}/edit`}> Edit Review!!</Link>
                <DeleteReview review={review} deleteReview={deleteReview}/>
            </div>


        </div>
    )
}

export default ReviewShow
