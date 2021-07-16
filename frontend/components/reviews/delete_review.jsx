import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class DeleteReview extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        
        this.props.deleteReview(this.props.review.id)
    }


    render() {
        
        return (
            <div>
                <button className="delete__button" onClick={this.handleSubmit}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
                    <div className="popup__before__delete">
                        This will permanently delete your comment
                    </div>

            </div>
        )
    }
}

export default DeleteReview
