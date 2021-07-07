class EditItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :photo_id, :integer 
  end
end
