
json.item do 
    json.extract! @item, :id, :name, :description, :price, :category_id
    if @item.photos.attached?
        json.photosUrl do json.array! @item.photos do |photo| 
                json.url url_for(photo) 
            end
        end
    end
end

json.reviews do 
    @item.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :title, :body, :author_id, :rating, :item_id
        end
    end
end