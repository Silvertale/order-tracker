class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :c_first_name
      t.string :c_last_name
      t.string :c_address
      t.string :c_city
      t.string :c_zip
      t.string :c_state
      t.string :c_telephone
      t.string :c_email
      t.string :r_first_name
      t.string :r_last_name
      t.string :r_address
      t.string :r_city
      t.string :r_state
      t.string :r_zip
      t.string :r_telephone
      t.string :r_email
      t.string :r_date
      t.string :r_guests
      t.string :r_time
      t.string :r_special_instructions
      t.string :package
      t.string :t1_size
      t.string :t1_flavor
      t.string :t1_filling
      t.string :t2_size
      t.string :t2_flavor
      t.string :t2_filling
      t.string :t3_size
      t.string :t3_flavor
      t.string :t3_filling
      t.string :t4_size
      t.string :t4_flavor
      t.string :t4_filling
      t.string :t5_size
      t.string :t5_flavor
      t.string :t5_filling
      t.decimal :base_price
      t.decimal :flower_price
      t.decimal :rolled_chocolate_price
      t.decimal :other_price
      t.decimal :tiering_price
      t.decimal :tiering_price
      t.decimal :deposit
      t.decimal :balance
      t.decimal :vendor_balance
      t.string :consultant

      t.timestamps null: false
    end
  end
end
