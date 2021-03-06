import * as ItemAPIUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM'

const receiveItems = items => {
    return {
        type: RECEIVE_ALL_ITEMS,
        items
    }
}

const receiveItem = ({item, reviews}) => {
    reviews ||= {}
    return {
        type: RECEIVE_ITEM,
        item,
        reviews
    }
}

export const fetchItems = () => dispatch => {
    return ItemAPIUtil.fetchItems()
    .then(items => 
        {  
        return dispatch(receiveItems(items))})
}   

export const fetchItem = itemId => dispatch => {
    return ItemAPIUtil.fetchItem(itemId)
    .then(item => dispatch(receiveItem(item)))
}