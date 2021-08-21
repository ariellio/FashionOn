import React from 'react';
import { Link } from "react-router-dom";
import Reviews from '../reviews/reviews_index';
import CreateReviews from '../reviews/reviews_form';
import CreateReviewsForm from '../reviews/reviews_form';
import DeleteReview from '../reviews/delete_review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
 

class ItemShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showMessage: false}
        this.displayError = this.displayError.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.itemId)
    }

    displayError(){
        this.setState({showMessage: true});
    }


   
        
    render() {
        const {item, reviews, deleteReview, user} = this.props
        //render photos if there are photos
        if (item === undefined) return null;
        if (Object.values(user).length > 0) {
                return (
                    <div className="total__show__page">
        
                        <div className="item__container">
                            {
                                item.photosUrl.map((photo, i) => {
                                    return <img className="item__photo" height="350px" key={i} src={photo.url} alt="" />
                                    
                                })
                            }
                            <div className="item__info">
                                <span className="item__name">
                                    {item.name}
                                </span>
                                <div className="stars__rating">
                                    ⭐️⭐️⭐️⭐️⭐️
                                </div>
                                <div className="item__price">
                                    <span className="price__tag">Price:</span> ${item.price}
                                </div>
                                {/* <div className="option__buttons">
                                    <button className="color__button">
                                        Color 
                                        <br />
                                        <FontAwesomeIcon icon={faCaretDown}/>
                                    </button>
                                    <button className="size__button">
                                        Size
                                        <br />
                                        <FontAwesomeIcon icon={faCaretDown}/>
                                    </button>
                                </div> */}
                                <div className="item__description" dangerouslySetInnerHTML={ {__html: item.description}} />
                                {/* <li> {item.description}</li>  */}
                            </div>
                            <div className="add__to__cart">
                                <h3 className="text__checkout">
                                    Checkout Here
                                </h3>
                                <button className="cart__button">
                                    Add to cart
                                </button>
                                <button className="buyNow__button">
                                    Buy now
                                </button>
                                <p>Thank you for shopping at FashionOn</p>
                                <p className="bottom__line">
                                    
                                {/* <DeleteReview review={reviews} deleteReview={deleteReview}/> */}
                                </p>
                            </div>  
                        </div>
                        <div className="line__break"></div>
                        <div>
                        </div>
                        <div className="review__container">
                            <div className="showPage__createReview__container">
                                <div className="showPage__review__content">
                                    <h3>Review this product</h3>
                                    <p>Share your thoughts with other customers</p>
                                    <button className="showPage__createReview__button"><Link to={`/reviews/createReview/${item.id}`}>Write a Customer Review</Link> </button>
                                </div>
                            </div>
                            <Reviews reviews={reviews} deleteReview={deleteReview} current_user={user}/>
                            {/* <CreateReviewsForm reviews={reviews}/> */}
                            {/* <Link to={`/reviews/createReview/${item.id}`}>Edit Review</Link> */}
                        </div>
                    </div>
                )
            }else if (Object.values(user).length === 0) {
                return (
                    <div className="total__show__page">
                        <div className="item__container">
                            {
                                item.photosUrl.map((photo, i) => {
                                    return <img className="item__photo" height="350px" key={i} src={photo.url} alt="" />
                                    
                                })
                            }
                            <div className="item__info">
                                <span className="item__name">
                                    {item.name}
                                </span>
                                <div className="stars__rating">
                                    ⭐️⭐️⭐️⭐️⭐️
                                </div>
                                <div className="item__price">
                                    <span className="price__tag">Price:</span> ${item.price}
                                </div>
                                <div className="item__description" dangerouslySetInnerHTML={ {__html: item.description}} />
                                {/* <li> {item.description}</li>  */}
                            </div>
                            <div className="add__to__cart">
                                <h3 className="text__checkout">
                                    Checkout Here
                                </h3>
                                <button className="cart__button">
                                    Add to cart
                                </button>
                                <button className="buyNow__button">
                                    Buy now
                                </button>
                                <p>Thank you for shopping at FashionOn</p>
                                <p className="bottom__line">
                                {/* <DeleteReview review={reviews} deleteReview={deleteReview}/> */}
                                </p>
                            </div>  
                        </div>
                        <div className="line__break"></div>
                        <div>
                        </div>
                        <div className="review__container">
                            <div className="showPage__createReview__container">
                                <div className="showPage__review__content">
                                    <h3>Review Product</h3>
                                    {/* <p> Must be logged in to share your thoughts</p> */}
                                    <div className="review__errorMessage">
                                        {this.state.showMessage ? "Need to sign in!" : ""}
                                    </div>
                                    <button key="logged__out" onClick={this.displayError} className="showPage__createReview__button">Write a Customer Review</button>
                                </div>
                            </div>
                            <Reviews reviews={reviews} deleteReview={deleteReview} current_user={user}/>
                            {/* <CreateReviewsForm reviews={reviews}/> */}
                            {/* <Link to={`/reviews/createReview/${item.id}`}>Edit Review</Link> */}
                        </div>
                    </div>
                )
            }
        } 
        
}

export default ItemShow;