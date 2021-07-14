import React from 'react';
import { Link } from "react-router-dom";
import Reviews from '../reviews/reviews_index';
import CreateReviews from '../reviews/create_reviews_form';
import CreateReviewsForm from '../reviews/create_reviews_form';

class ItemShow extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.itemId)
    }
        
    render() {
        const {item, reviews} = this.props
        //render photos if there are photos
        if (item === undefined) return null;
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
                            ⭐️
                        </div>
                        <div className="item__price">
                            {item.price}
                        </div>
                        <div className="option__buttons">
                            <button className="color__button">Black</button>
                            <button className="size__button">Black</button>
                        </div>
                        <div className="item__description">
                            {item.description}
                        </div>

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
                            
                        </p>
                    </div>  
                </div>
                <div>
                    <Reviews reviews={reviews}/>
                    {/* <CreateReviewsForm reviews={reviews}/> */}
                    <Link to={`/reviews/createReview/${item.id}`}>Create Review</Link>
                </div>
            </div>
        )
    }
}

export default ItemShow;