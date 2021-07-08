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
        return (
            <div>
                hello {item.name}

                {
                    item.photosUrl.map(photo => {
                    <img src={photo} alt="" />

                    })
                }
            </div>
        )
    }
}

export default ItemShow;