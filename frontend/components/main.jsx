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


const Main = () => (
    <div>
        <Navbar />
        <Switch>
            <Route path={`/items/search/nike`} component={SearchContainer} />
            <Route path="/items/:itemId" component={ItemShowContainer} />
            <Route exact path="/" component={ItemIndexContainer} />
        </Switch>
        <Footer />
    </div>
    
);

export default Main;