# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151029194233) do

  create_table "orders", force: :cascade do |t|
    t.string   "c_first_name"
    t.string   "c_last_name"
    t.string   "c_address"
    t.string   "c_city"
    t.string   "c_zip"
    t.string   "c_state"
    t.string   "c_telephone"
    t.string   "c_email"
    t.string   "r_first_name"
    t.string   "r_last_name"
    t.string   "r_address"
    t.string   "r_city"
    t.string   "r_state"
    t.string   "r_zip"
    t.string   "r_telephone"
    t.string   "r_email"
    t.string   "r_date"
    t.string   "r_guests"
    t.string   "r_time"
    t.string   "r_special_instructions"
    t.string   "package"
    t.string   "t1_size"
    t.string   "t1_flavor"
    t.string   "t1_filling"
    t.string   "t2_size"
    t.string   "t2_flavor"
    t.string   "t2_filling"
    t.string   "t3_size"
    t.string   "t3_flavor"
    t.string   "t3_filling"
    t.string   "t4_size"
    t.string   "t4_flavor"
    t.string   "t4_filling"
    t.string   "t5_size"
    t.string   "t5_flavor"
    t.string   "t5_filling"
    t.decimal  "base_price"
    t.decimal  "flower_price"
    t.decimal  "rolled_chocolate_price"
    t.decimal  "other_price"
    t.decimal  "tiering_price"
    t.decimal  "deposit"
    t.decimal  "balance"
    t.decimal  "vendor_balance"
    t.string   "consultant"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.string   "delivery_price"
  end

end
