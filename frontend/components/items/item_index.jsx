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
            <div className="home">
                <div className="home__container">
                                <img height="400px" className="home__image" width="100%" src="https://fashionon-seed.s3.amazonaws.com/splash_banner.jpeg" alt="" />
                    <div className="item__row">    
                        {
                                    items.map( item => {
                                        let photos 
                                        if (item.photosUrl) {
                                            photos = item.photosUrl.map(
                                                (photo, i) => {
                                                    return <img height="250px" key={i} src={photo.url} alt="" />
                                                }
                                            )
                                        }
                        return (
                            <div className="item"> 
                                <div className="item__info">
                                    <p className="item__title">
                                            {item.name}
                                    </p>
                                </div>
                                <Link to={`/items/${item.id}`}>
                                    {photos}
                                </Link>

                                {/* <button>Add to Cart</button> */}
                            </div>)

                            })
                        }
                </div>
            </div>
         </div>
        )
    }
}

export default ItemIndex;