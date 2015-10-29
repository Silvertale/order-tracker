class OrderFormController < ApplicationController
    
    def index
        render "order_form/index"  #this will be the main menu
    end
    
    def /
            render :text => "order_form_controller /"  #this will be the main menu   
    end
    
    def create
        render "order_form/create"
    end
    
    def vendor_list
        render "order_form/vendor_list" 
    end
    

    
    
    
end
