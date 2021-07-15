class Review < ApplicationRecord 

    validates :title,:body, :rating, presence: true

    def self.find_reviews(item_title)
        Review.includes(:item)
            .where("item.title = ?", item_title )
            .references(:title)
    end



    belongs_to :item,
        class_name: :Item,
        foreign_key: :item_id


    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id


    


end