import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
        constructor(props){
            super(props)
            // this.componentDidUpdate = this.componentDidUpdate.bind(this);
        }

        componentDidUpdate(){
            return window.scrollTo(0, 0);
        }

        render() {
                return (<div onClick={this.componentDidUpdate} className="footer">
                    <div className="bigFooter">
                        <div>
                            <a href="https://github.com/ariellio">
                                <img height="20px" src="https://cdn.iconscout.com/icon/free/png-512/github-138-459178.png" alt=""/>
                            </a>
                        </div>
                        <div>
                            <p className="footerInfo">
                            LinkedIn
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
                </div>)

            }
};

export default Footer


