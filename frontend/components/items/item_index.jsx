import React from 'react';
// import { Link } from "react-router-dom";

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
            <div>
                {
                    items.map( item =>
                        <li>
                            {item.name}
                        </li>
                    )
                }
            </div>
        )
    }
}

export default ItemIndex;