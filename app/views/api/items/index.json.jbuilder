json.array! @items do |item|
    json.extract! item, :id, :name, :description, :price, :category_id
    # json.photoUrl url_for(item.photo)
end