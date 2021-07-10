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
                     <div className="logo-header">
                            <Link to='/'>
                                          <img height="60" src="https://fashionon-seed.s3.amazonaws.com/Screen+Shot+2021-07-09+at+3.10.32+PM.png" />
                            </Link>
                     </div>
                            <div className="searchBar">
                                   <input
                                          type="text"
                                          width="200px"
                                          
                                   />
                                   <div className="magnifyingGlass">
                                          <FontAwesomeIcon icon={faSearch} />
                                   </div>
                            </div>
                     <div className="right-side">
                                   <GreetingsContainer />
                            <div className="shoppingCart">
                                   <FontAwesomeIcon icon={faShoppingCart}/>
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