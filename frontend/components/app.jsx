import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import GreetingsContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import GlobalNav from './global_nav/global';
import Splash from './splash/splash'
const App = () => (
    <div>
        <header>
            <div>
                <div className="nav-bar">
                    <li>
                        <Link to='/'>
                            <img height="200" src="https://lh3.googleusercontent.com/5gfxy4BELemetG70hP3lfs3YS_xWQMxKHwp-bKm5q2-_PyCBP6rEN-s5rt0LVUUP5_XH84YELyjaSrnXHsKdp3Cz3391mhROcuy5Ho_zG-BKEh-oQjG42j3DHPPJNthYZ9pYhS5sSw=w500-h315-p-k" />
                        </Link>
                    </li>
                    <li>
                        <img className="searchbar" src="https://static.vecteezy.com/system/resources/thumbnails/002/272/250/small/browser-search-bar-template-simple-minimal-design-with-magnifying-glass-search-icon-free-free-vector.jpg" alt="" />
                    </li>
                    <li>
                        <GreetingsContainer />
                    </li>
                    <li>
                        <Switch>
                            <AuthRoute path="/signup" component={SignupFormContainer} />
                            <AuthRoute path="/login" component={LoginFormContainer} />
                            <Route path="/" />
                        </Switch>
                    </li>
                </div>
                <ul>
                    <Splash />
                </ul>
                <ul>
                </ul>
            </div>
        </header>

    </div>
);

export default App;