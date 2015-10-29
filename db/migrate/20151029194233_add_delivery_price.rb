class AddDeliveryPrice < ActiveRecord::Migration
  def change
      add_column :orders, :delivery_price, :string
  end
end
