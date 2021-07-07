class EditItems1 < ActiveRecord::Migration[5.2]
  def change
      remove_column :items, :photo_id
  end
end
