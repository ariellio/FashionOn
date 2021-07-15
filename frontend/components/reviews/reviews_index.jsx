import React from 'react'
import ReviewShow from './review_show'

function Reviews(props) {
    if (props.reviews.length === 0) return null
        return ( 
        <div className="allReviews__container">
            {
                props.reviews.map( review => {
                   return (<div className="allReviews">
                        <ReviewShow review={review} deleteReview={props.deleteReview} current_user={props.current_user}/>
                    </div>)
                }

                )
            
            }
        </div>
    )
    
}

export default Reviews;
