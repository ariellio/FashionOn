import React from 'react'
import DeleteReview from './delete_review'
import CreateReviewsForm from './reviews_form'
import ReviewShow from './review_show'

function Reviews(props) {
    if (props.reviews.length === 0) return null
    // debugger
        return ( 
        <div className="all__reviews">
            {
                props.reviews.map( review => {
                   return (<div>
                        <ReviewShow review={review} deleteReview={props.deleteReview}/>
                    </div>)
                }

                )
            
            }
        </div>
    )
    
}

export default Reviews;
