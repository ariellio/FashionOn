import { connect } from 'react-redux';
import ItemIndexPage from './item_index_page';
import { fetchItems } from '../../actions/item_actions';
import { selectItems } from '../../reducers/selectors_reducer';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = state => {
    
    return {
        items: Object.values(state.entities.items)
    }
}

const mDTP = dispatch => {
    return {
        fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mSTP, mDTP)(ItemIndexPage)