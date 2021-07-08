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
                    items.map( item => {
                        let photos 
                        if (item.photosUrl) {
                            photos = item.photosUrl.map(
                                photo => {
                                    return <img src={photo.url} alt="" />
                                }
                            )
                        }
                        return (<div className={`item-display-info`}> 
                            <li>
                               
                                <Link to={`/items/${item.id}`}>
                                    {item.name}
                                    {photos}
                                </Link>
                                {/* {item.description}
                                {item.price}
                                <br /> */}
                               
                                {/* <img src={`${item.photoUrl}`} alt="" /> */}
                            </li>
                        </div>)

                    }

                    )
                }
            </div>
        )
    }
}

export default ItemIndex;