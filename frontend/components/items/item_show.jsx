import React from 'react';
import { Link } from "react-router-dom";

class ItemShow extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    componentDidMount() {
        this.props.fetchItem(this.props.item.id)
    }
        
    render() {
        return (
            <div>
                hello {this.props.item.name}
            </div>
        )
    }
}

export default ItemShow;