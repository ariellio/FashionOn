class RemoveUsersReview < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :reviews_id, :integer
  end
end
