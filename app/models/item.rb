class Item < ApplicationRecord
    validates :name, presence: true
    validates :description, :price, presence: true

    # belongs_to :user,

    # belongs_to :category
    has_many :reviews
    has_many :cart_items
    has_many_attached :photos



end