import React from 'react';
import { Link } from 'react-router-dom';
import GreetingsContainer from '../greeting/greeting_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { fasSortDown } from '@fortawesome/free-solid-svg-icons'
import Greeting from '../greeting/greeting';




const Navbar = () => {

   return( 
       <div className="whole__navbar">
              <div className="navbar">
                     <Link to='/'>
                            <img className="header__logo" src="https://fashionon-seed.s3.amazonaws.com/Screen+Shot+2021-07-10+at+6.57.31+PM.png" />
                     </Link>

                     <div className="header__search">
                            <input className="header__searchInput" type="text"/>
                            <FontAwesomeIcon className="header__searchIcon" icon={faSearch} />
                     </div>

                     <div className="header__nav">
                            <div className="header__option">
                                   <GreetingsContainer />
                            </div>
                            <div className="header__option">
                                   <span className="header__optionOne">
                                          Returns
                                   </span>
                                   <span className="header__optionTwo">
                                          & Orders
                                   </span>
                            </div>
                     <div className="header__optionCart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="header_optionTwo header__cartCount">0</span>
                     </div>
                     </div>
              </div>
              <div className="under__navBar">
                     <span className="option__one">
                            Shirts
                     </span>
                     <span className="option__one">
                            Hoodies
                     </span>
                     <span className="option__one">
                            Shoes
                     </span>
                     <span className="option__one">
                            Jeans
                     </span>
              </div>
              {/* <div className="dropdown__content">
                     <span className="link__to__login">
                            <button className="login__signup__buttons"><Link to="/login">Sign In</Link></button>
                     </span>
                     <span className="link__to__signup">
                            New customer? <Link to="/signup"> Start here.</Link>
                     </span>
              </div> */}
       </div>
    )
}

export default Navbar;