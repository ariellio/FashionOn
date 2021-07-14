import React from 'react';
import { Link } from "react-router-dom";





function ItemIndexItem({item}) {
    let photos 
        if (item.photosUrl) {
            photos = item.photosUrl.map(
                (photo, i) => {
                    return <img height="250px" key={`item-photo-${i}-${photo.url}`} src={photo.url} alt="" />
                }
            )
        }
    
    return (
        <div className="items-display-info" >
            <div className="item__row">    
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
                </div>
            </div>
        </div>
    )
}

export default ItemIndexItem;


