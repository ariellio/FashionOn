import React from 'react';
import { Link } from "react-router-dom";

class ItemIndex extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchItems()
    }

    render(){
        const {items} = this.props
        return(
            <div className="items-display-info">
                {
                    items.map( item =>
                        <div className={`item-display-info`}> 
                            <li>
                                <Link to={`/items/${item.id}`}>
                                    {item.name}
                                </Link>
                                {item.description}
                                {item.price}
                                <br />
                                <img src={`${item.photoUrl}`} alt="" />
                            </li>
                        </div>

                    )
                }
            </div>
        )
    }
}

export default ItemIndex;