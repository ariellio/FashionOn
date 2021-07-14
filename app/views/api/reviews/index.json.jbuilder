json.set! @reviews do |review|
        json.extract! review, :id, :title, :body, :rating, review.author.username
    end

end