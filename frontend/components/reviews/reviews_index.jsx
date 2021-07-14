import React from 'react'
import CreateReviewsForm from './create_reviews_form'
import ReviewShow from './review_show'

function Reviews(props) {
    if (props.reviews.length === 0) return null
    debugger
        return ( 
        <div className="all__reviews">
            {
                props.reviews.map( review => {
                    debugger
                   return (<div>
                        <ReviewShow review={review} />
                    </div>)
                }

                )
            
            }
        </div>
    )
    
}

export default Reviews;
