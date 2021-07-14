class EditUsersRev < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :reviews_id, :integer
  end
end
