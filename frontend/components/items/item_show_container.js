import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem } from '../../actions/item_actions';
import { Link } from 'react-router-dom';
import React from 'react';
import { fetchItems } from '../../util/item_api_util';
import {deleteReview} from '../../actions/review_actions';

const mSTP = (state, ownprops) => {
    debugger
    return {
        item: state.entities.items[ownprops.match.params.itemId], 
        reviews: Object.values(state.entities.reviews),
        user: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        fetchItem: (itemId) => dispatch(fetchItem(itemId)),
        deleteReview: reviewId => dispatch(deleteReview(reviewId))
    }
}

export default connect(mSTP, mDTP)(ItemShow)