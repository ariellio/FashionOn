import React from 'react';
import { Link } from "react-router-dom";

class ItemShow extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount() {
        this.props.fetchItem(this.props.match.params.itemId)
    }
        
    render() {
        const {item} = this.props
        //render photos if there are photos
        if (item === undefined) return null;
        return (
            <div>
                {/* <img src={item.photosUrl[0].url} alt="" /> */}
                {
                    item.photosUrl.map((photo, i) => {
                        return <img key={i} src={photo.url} alt="" />
                        
                    })
                }
                helloy {item.name}
            </div>
        )
    }
}

export default ItemShow;