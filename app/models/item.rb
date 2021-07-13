class Item < ApplicationRecord
    validates :name, presence: true
    validates :description, :price, presence: true

    # belongs_to :user,

    # belongs_to :category
    has_many :reviews
    has_many :cart_items
    has_many_attached :photos


    def self.find_item(search)
        split_search = search.split(" ")
        searched_item = split_search.map{|char| "name ILIKE '%#{char}%'"}.join(" OR ")
        
        Item
        .where(searched_item)
    end
        
end