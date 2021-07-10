import React from 'react';
import { Route, Switch } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import GreetingsContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ItemIndexContainer from './items/item_index_container';
import SearchBar from './searchbar/searchbar';
import {AuthRoute} from '../util/route_util';
import GlobalNav from './global_nav/global';
import ItemIndex from './items/item_index';
import SplashComponent from './navbar/navbar';
import ItemShowContainer from './items/item_show_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Footer from './footer/footer';
import Main from './main';


const App = () => (
    <div>
        {/* <header>
            <SplashComponent/>
        </header> */}
            <div>
                <Switch>
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <Route path="/" component={Main} />
                </Switch>
                    {/* <Footer /> */}
            </div>
    </div>
);

export default App;