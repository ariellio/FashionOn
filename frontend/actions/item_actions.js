import * as ItemAPIUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM'

const receiveItems = items => {
    return {
        type: RECEIVE_ALL_ITEMS,
        items
    }
}

const receiveItem = item => {
    return {
        type: RECEIVE_ITEM,
        item
    }
}

export const fetchItems = () => dispatch => {
    return ItemAPIUtil.fetchItems()
    .then(items => 
        {  
            return dispatch(receiveItems(items))})
}   

export const fetchItem = item => dispatch => {
    return ItemAPIUtil.fetchItem(item)
    .then(item => dispatch(receiveItem(item)))
}