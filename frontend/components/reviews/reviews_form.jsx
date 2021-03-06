import React from 'react'
import { fetchReviews } from '../../actions/review_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Redirect,Route } from 'react-router'


class ReviewsForm extends React.Component {
    constructor(props){
        super(props)
        this.state =  this.props.review
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    
    handleSubmit(e){
        e.preventDefault();
        
        this.props.action(this.state).then(() => this.props.history.push(`/items/${this.props.review.item_id}`))
    }

    componentDidMount(){
        if (!this.props.review) {
            this.props.fetchReview(this.props.match.params.reviewId)
        }
        
        if (this.props.currentUser[0] === null) {
            this.props.history.push(`/items/${this.props.review.item_id}`)
        }
    }

    handleUpdate(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }
    
    render() {
        if (this.props.currentUser[0] !== null) {
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
                <button onChange={this.handleSubmit}>Submit</button>
                </div>
            </form>
            )
        }else {
            return (
                <div>
                    Must be logged in :()
                </div>
            )
        }
    }
}

export default ReviewsForm;
