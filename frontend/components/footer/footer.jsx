import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
        constructor(props){
            super(props)
            this.componentDidUpdate = this.componentDidUpdate.bind(this);
        }

        componentDidUpdate(prevProps){
            return window.scrollTo(0, 0);
        }

        render() {
                return (<div className="footer">
                        <div onClick={this.componentDidUpdate}>
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
                </div>)

            }
};

export default Footer


