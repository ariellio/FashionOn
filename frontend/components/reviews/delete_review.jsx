import React from 'react';

export class DeleteReview extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        debugger
        this.props.deleteReview(this.props.review.id)
    }


    render() {
        debugger
        return (
            <button onClick={this.handleSubmit}>Delete here</button>
        )
    }
}

export default DeleteReview
