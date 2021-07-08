import { connect } from 'react-redux';
import ItemShow from './item_show';
import { fetchItem } from '../../actions/item_actions';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = (state, ownprops) => {
    return {
        item: state.entities.items[ownprops.match.params.itemId]
    }
}

const mDTP = dispatch => {
    return {
        fetchItem: (item) => dispatch(fetchItem(item))
    }
}

export default connect(mSTP, mDTP)(ItemShow)