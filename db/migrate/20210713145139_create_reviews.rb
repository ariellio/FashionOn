class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :item_id, null:false, index: true
      t.string :title, null:false, index: true
      t.text :body, null:false, index: true
      t.integer :rating
      t.timestamps
    end
  end
end
