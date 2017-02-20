class RemoveOrdFromListings < ActiveRecord::Migration
  def change
    remove_column :listings, :ord, :integer, null: false
  end
end
