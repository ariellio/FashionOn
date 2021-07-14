json.extract! @review, :id, :title, :body, :rating, :updated_at
json.item @review.item.item_title
json.imageURL @review.item.image_url