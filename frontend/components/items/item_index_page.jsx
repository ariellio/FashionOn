import React from 'react';
import { Link } from "react-router-dom";
import ItemIndex from './item_index';


class ItemIndexPage extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchItems()
    }

    render(){
        
        const {items} = this.props
        return(
            <div className="home">
                <div className="home__container">
                    <img height="400px" className="home__image" width="100%" src="https://fashionon-seed.s3.amazonaws.com/splash_banner.jpeg" alt="" />   
                        <ItemIndex items={items}/>
                </div>

         </div>
        )
    }
}

export default ItemIndexPage;