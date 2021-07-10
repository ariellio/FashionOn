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
                                (photo, i) => {
                                    return <img height="350px" key={i} src={photo.url} alt="" />
                                }
                            )
                        }
                        return (
                        <div className={`item-display-info`}> 
                                <div className="items-display-header">
                                    {item.name}
                                </div>
                                <div className="items-display-main">
                                    <div className="splash-photos">
                                        <Link to={`/items/${item.id}`}>
                                            {photos}
                                        </Link>
                                    </div>
                                </div>
                                {/* <div className="items-display-footer">
                                    {item.description}
                                </div> */}
                        </div>)

                    })
                }
            </div>
        )
    }
}

export default ItemIndex;