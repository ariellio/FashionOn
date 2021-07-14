import {combineReducers} from 'redux';
import users from './users_reducer';
import items from './items_reducer';
import search from './search_reducer';
import reviews from './reviews_reducer';


const entitiesReducer = combineReducers({
    users,
    search,
    items,
    reviews
});

export default entitiesReducer;