import React from 'react';
import { Link } from 'react-router-dom';
import GreetingsContainer from '../greeting/greeting_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



const Splash = () => {

   return( 
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
    )
}

export default Splash;