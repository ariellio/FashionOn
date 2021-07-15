import React from 'react';
import { Route, Switch } from 'react-router';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ItemIndexContainer from './items/item_index_container';
import {AuthRoute} from '../util/route_util';
import SplashComponent from './navbar/navbar';
import ItemShowContainer from './items/item_show_container';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import SearchContainer from './search/search_container'
import CreateReviewsContainer from './reviews/create_reviews_container';
import EditReviewsContainer from './reviews/edit_reviews_container';

const Main = () => (
    <div>
        <Navbar />
        <Switch>
            <Route path={`/items/search/:queryString`} component={SearchContainer} />
            <Route path={`/reviews/:reviewId/edit`} component={EditReviewsContainer} />
            <Route exact path={`/reviews/createReview/:itemId`} component={CreateReviewsContainer} />
            <Route exact path="/items/:itemId" component={ItemShowContainer} />
            <Route exact path="/" component={ItemIndexContainer} />
        </Switch>
        <Footer />
    </div>
    
);

export default Main;