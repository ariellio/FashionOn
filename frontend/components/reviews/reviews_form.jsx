import React from 'react'
import { fetchReviews } from '../../actions/review_actions'



class ReviewsForm extends React.Component {
    constructor(props){
        super(props)
        this.state =  this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        // debugger
    }
    
    handleSubmit(e){
        e.preventDefault();
        
        this.props.action(this.state).then(() => this.props.history.push(`/items/${this.props.review.item_id}`))
    }

    componentDidMount(){
        if (!this.props.review) {
            this.props.fetchReview(this.props.match.params.reviewId)
        }
    }

    handleUpdate(field){
        // debugger
        return e => this.setState({[field]: e.currentTarget.value})
    }
    
    render() {
    
    return (
        <form onSubmit={this.handleSubmit}>
            <label> Title
                <div>
                    <input className="review__title" value={this.state.title} type="text" onChange={this.handleUpdate('title')}/>
                </div>
            </label>
            <label> Description
                <div>
                    <input className="review__body" value={this.state.body} type="text" onChange={this.handleUpdate('body')}/>
                </div>
            </label>
            <label> Rating
                <div>
                    <input className="review__body" value={this.state.rating} type="number" onChange={this.handleUpdate('rating')}/>
                </div>
            </label>
            <button onChange={this.handleSubmit}>Submit</button>
        </form>
        )
    }
}

export default ReviewsForm;
