class OrderDataController < ApplicationController
    
    def create
        #get all data in
        #to lowercase everything
        #then save to table
        order = Order.new
        order.c_first_name = params["c_first_name"].downcase
        order.c_last_name = params["c_last_name"].downcase
        order.c_address = params["c_address"].downcase
        order.c_city = params["c_city"].downcase
        order.c_zip = params["c_zip"].downcase
        order.c_state = params["c_state"].downcase
        order.c_telephone = params["c_telephone"].downcase
        order.c_email = params["c_email"].downcase
        
        order.r_first_name = params["r_first_name"].downcase
        order.r_last_name = params["r_last_name"].downcase
        order.r_address = params["r_address"].downcase
        order.r_city = params["r_city"].downcase
        order.r_state = params["r_state"].downcase
        order.r_zip = params["r_zip"].downcase
        order.r_telephone = params["r_telephone"].downcase
        order.r_email = params["r_email"].downcase
        order.r_date = params["r_date"].downcase
        order.r_time = params["r_time"].downcase
        order.r_special_instructions = params["r_special_instructions"].downcase
        order.r_guests = params["r_guests"].downcase
        order.package = params["package"].downcase
        
        order.t1_size = params["t1_size"].downcase
        order.t1_flavor = params["t1_flavor"].downcase
        order.t1_filling = params["t1_filling"].downcase
        order.t2_size = params["t2_size"].downcase
        order.t2_flavor = params["t2_flavor"].downcase
        order.t2_filling = params["t2_filling"].downcase
        order.t3_size = params["t3_size"].downcase
        order.t3_flavor = params["t3_flavor"].downcase
        order.t3_filling = params["t3_filling"].downcase
        order.t4_size = params["t4_size"].downcase
        order.t4_flavor = params["t4_flavor"].downcase
        order.t4_filling = params["t4_filling"].downcase
        order.t5_size = params["t5_size"].downcase
        order.t5_flavor = params["t5_flavor"].downcase #problem here!
        order.t5_filling = params["t5_filling"].downcase
        
        #these will all need to be converted to decimal!
        order.base_price = params["base_price"].downcase
        order.flower_price = params["flower_price"].downcase
        order.rolled_chocolate_price = params["rolled_chocolate_price"].downcase
        order.tiering_price = params["tiering_price"].downcase
        order.delivery_price = params["delivery_price"].downcase
        order.balance = params["balance"].downcase
        order.deposit = params["deposit"].downcase
        order.vendor_balance = params["vendor_balance"].downcase
        order.consultant = params["consultant"].downcase
        
        confirmation = order.save
        render(:text => "Saving order... result: " + confirmation.to_s)
    end
    
end
