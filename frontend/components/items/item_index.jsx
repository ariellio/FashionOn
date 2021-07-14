import React from 'react';
import { Link } from "react-router-dom";





function ItemIndex({items}) {
    
    return (
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
                            <Link to={`/items/${item.id}`}>
                                <p className="item__title">
                                        {item.name}
                                </p>
                            </Link>
                        </div>
                        <Link to={`/items/${item.id}`}>
                            {photos}
                        </Link>
                    </div>)

                    })
                }
        </div>
    )
}

export default ItemIndex;


