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
import SplashComponent from './splash/splash';
import ItemShowContainer from './items/item_show_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const App = () => (
    <div>
        <header>
            <div className="nav-bar">
                <div>
                    <Link to='/'>
                        <img height="65" src="https://lh3.googleusercontent.com/5gfxy4BELemetG70hP3lfs3YS_xWQMxKHwp-bKm5q2-_PyCBP6rEN-s5rt0LVUUP5_XH84YELyjaSrnXHsKdp3Cz3391mhROcuy5Ho_zG-BKEh-oQjG42j3DHPPJNthYZ9pYhS5sSw=w500-h315-p-k" />
                    </Link>
                </div>
                <div className="searchBar">
                    <div>
                        <input 
                            type="text"
                            width="200px"
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <div>
                    <GreetingsContainer />
                </div>
            </div>
            <div className="category-bar">
                <div>
                    Shirts
                </div>
                <div>
                    Shoes
                </div>
                <div>
                    Hoodies
                </div>
                <div>
                    Jeans
                </div>
            </div>
        </header>
        <main>
            <div className="banner-photo">
                <img height="400px" width="100%"src="https://fashionon-seed.s3.amazonaws.com/splash_banner.jpeg" alt="" />
            </div>
            <div>
                <Switch>
                    <Route path={`/items/:itemId`} component={ItemShowContainer} />
                    <Route path="/items" component={ItemIndexContainer} />
                    <AuthRoute path="/signup" component={SignupFormContainer} />
                    <AuthRoute path="/login" component={LoginFormContainer} />
                    <Redirect from='/' to="/items" />
                </Switch>
            </div>
        </main>
        <footer>
            <div className="footer">
                <div>
                    Back to top
                </div>
                <div className="bigFooter">
                    <div>
                        <p className="footerInfo">
                            Get to know us
                        </p>
                    </div>
                    <div>
                        <p className="footerInfo">
                            Make Money with us
                        </p>
                    </div>
                    <div>
                        <p className="footerInfo">
                            FashionOn Payment Products
                        </p>
                    </div>
                    <div>
                        <p className="footerInfo">
                            Let us Help You
                        </p>
                    </div>
                    <div>
                        <p className="footerInfo">
                            Logo and locations 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
);

export default App;