import React from 'react';
import { Link } from 'react-router-dom';
import GreetingsContainer from '../greeting/greeting_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {

   return( 
          <header>
                 <div className="nav-bar">
                        <div className="left-side">
                            <div className="logo-header">
                                   <Link to='/'>
                                             <img height="65" src="https://fashionon-seed.s3.amazonaws.com/Screen+Shot+2021-07-09+at+3.10.32+PM.png" />
                                   </Link>
                            </div>
                            <div className="searchBar">
                                   <div className="nav-left">
                                   </div>
                                   <div className="nav-middle">
                                          <input
                                                 type="text"
                                                 width="200px"
                                          />
                                   </div>
                                   <div className="nav-right">
                                          <FontAwesomeIcon icon={faSearch} />
                                   </div>
                        </div>
                            <div className="right-side">
                                   <div>
                                          <GreetingsContainer />
                                   </div>
                                   <div>
                                          <FontAwesomeIcon icon={faShoppingCart}/>
                                   </div>
                            </div>
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
    )
}

export default Navbar;