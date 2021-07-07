import { RECEIVE_ALL_ITEMS, RECEIVE_ITEM } from '../actions/item_actions';


const itemsReducer = (oldState = { }, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ALL_ITEMS:
            return action.items
        case RECEIVE_ITEM:
            let newState = Object.assign({}, oldState)
            return (newState[action.items.id] =  action.item);
        default:
            return oldState;
    }
}

export default itemsReducer;