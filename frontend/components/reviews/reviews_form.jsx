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
        <form className="createEdit__form__container" onSubmit={this.handleSubmit}>
            <div className="createEdit__form">
            <label className="form__title"> Add a Headline
                <div>
                    <input className="review__title__input" value={this.state.title} type="text" onChange={this.handleUpdate('title')}/>
                </div>
            </label>
            <label className="body__form"> Description
                <div>
                    <textarea className="review__body__input" value={this.state.body} onChange={this.handleUpdate('body')}/>
                </div>
            </label>
            <label> Rating
                <div>
                    <input className="review__rating__input" value={this.state.rating} type="number" onChange={this.handleUpdate('rating')}/>
                </div>
            </label>
            <button onChange={this.handleSubmit}>Submit</button>
            </div>
        </form>
        )
    }
}

export default ReviewsForm;
