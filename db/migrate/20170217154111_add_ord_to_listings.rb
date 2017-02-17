class AddOrdToListings < ActiveRecord::Migration
  def change
    add_column :listings, :ord, :integer, null: false
  end
end
