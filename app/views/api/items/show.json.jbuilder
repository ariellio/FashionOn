json.extract! @item, :id, :name, :description, :price, :category_id
    if @item.photos.attached?
        json.photosUrl do json.array! @item.photos do |photo| 
                json.url url_for(photo) 
            end
        end
    end
