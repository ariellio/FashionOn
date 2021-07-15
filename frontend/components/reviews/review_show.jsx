import React from 'react';
import {Link} from 'react-router-dom';
import DeleteReview from './delete_review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'



function ReviewShow({review, deleteReview, current_user}) {


    if (current_user[review.author_id] &&  current_user[review.author_id].id === review.author_id){
        return (
            <div className="single__review">
                <div className="review__details">
                    <div>

                    </div>
                    <div className="username">
                    <FontAwesomeIcon icon={faUser} />
                        {current_user[review.author_id].username}
                    </div>
                    <div className="review__title">
                        {review.title}
                    </div>
                    <textarea disabled="disabled" className="review__body"
                        value={review.body}
                    />
                </div>
                <div className="review__options">
                    <Link to={`/reviews/${review.id}/edit`}> 
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <DeleteReview review={review} deleteReview={deleteReview}/>
                </div>
            </div>
        ) } else {
            return (
                <div className="single__review">
                    <div className="review__title">
                        {review.title}
                    </div>
                    <div className="review__body">
                        {review.body}
                    </div>
                </div>
            )
        }
}

export default ReviewShow
