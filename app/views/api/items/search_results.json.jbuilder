json.array! @items do |item|
    json.extract! item, :id, :name, :description, :price 
    json.photos do 
        json.array! item.photos do |item|
            json.imageUrl url_for(item)
        end 
    end
end