import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngellist } from '@fortawesome/free-brands-svg-icons'

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
                                <img height="25px" src="https://cdn.iconscout.com/icon/free/png-128/github-165-864021.png" alt=""/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/ariel-davies-84456a113/">
                                <img height="25px" src="https://cdn.iconscout.com/icon/free/png-128/linkedin-3089482-2567434.png" alt="" />
                            </a>
                        </div>
                        <div>
                            <FontAwesomeIcon className="angelIcon" icon={faAngellist}>
                                <a href="https://angel.co/u/ariel-davies">
                                    <img src="https://angel.co/u/ariel-davies" alt="" />
                                </a>
                            </FontAwesomeIcon>
                        </div>
                    </div>
                </div>)

            }
};

export default Footer


