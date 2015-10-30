var app = angular.module("create_app", ['ui.bootstrap']);

app.controller("create_controller", function($scope, $interval, $http){
  //look at package for show basePrice
  //Show only the number of tiers we are using
  //pre-assign tier sizes by r_people
  //...
    
    
    
    //when $scope.r_guests changes, update the tiering info by turning on or off id="t#"
    console.log("here");
        $http({
            url: "/get",
            method: "POST",
            data: {id: $('#id').val()}
        }).then(successCallback = function(data){
            console.log(data);
            $scope = JSON.parse(data);//set scope   
        });
    



    $scope.sizes = ['6"', '8"', '9"', '10"', '12"', '14"', '16"', '18"', '20"']
    $scope.flavors = ['Gold Cake', 'Chocolate Cake', 'Marble Cake', 'Pecan Cake', 'Hazelnut Cake', 'Pumpkin Spice Cake', 'Cranberry Walnut Cake', 'Carrot Cake', 'Carrot Cranberry Cake'];
    $scope.fillings = ['White Chocolate Mousse', 'Chocolate Mousse', 'Chocolate Mocha Mousse', 'Mascarpone Mousse', 'Raspberry Chambord Mousse', 'Orange Champagne Mousse', 'Lemon Mousse', 'Chocolate Champagne Mousse', 'Chocolate Kahlua Mousse', 'Chocolate Baileys Cream', 'White Chocolate Cognac Truffle Mousse', 'Banana Mousse', 'Raspberry Mousse'];
    $scope.tiering = [{people:"40", t1:'8"', t2:'12"', t3:'', t4:'', t5:'', show:2}, {people:'50', t1:'8"', t2:'14"', t3:'', t4:'', t5:'', show:2}, {people:'60', t1:'8"', t2:'16"', t3:'', t4:'', t5:'', show:2}, {people:'75', t1:'6"', t2:'10"', t3:'14"', t4:'', t5:'', show:3}, {people:'90', t1:'8"', t2:'12"', t3:'16"', t4:'', t5:'', show:3}, {people:'125', t1:'6"', t2:'9"', t3:'12"', t4:'16"', t5:'', show:4}, {people:'150', t1:'6"', t2:'10"', t3:'14"', t4:'18"', t5:'', show:4}, {poeple:'225', t1:'8"', t2:'12"', t3:'16"', t4:'20"', t5:'', show:4}, {people:'250', t1:'6"', t2:'9"', t3:'12"', t4:'16"', t5:'20"', show:5}, {people:'', t1:'', t2:'', t3:'', t4:'', t5:'', show:0}];
    
    $scope.guests = ['', '40', '50', '60', '75', '90', '125', '150', '225', '250'];//number of guests categories

    
    $scope.setGuests = function(){
        
        $scope.base_price = 3.50 * $scope.r_guests;
        
        var model = {};
        switch($scope.r_guests){
            case '':
                model = $scope.tiering[9];//(all empty)
            break;    
            case '40':
                model = $scope.tiering[0];  
            break;
            case '50':
                model = $scope.tiering[1];
            break;
            case '60':
                model = $scope.tiering[2];    
            break;
            case '75':
                model = $scope.tiering[3];
            break;
            case '90':
                model = $scope.tiering[4];
            break;
            case '125':
                model = $scope.tiering[5];
            break;
            case '150':
                model = $scope.tiering[6];
            break;
            case '225':
                model = $scope.tiering[7];
            break;
            case '250':
                model = $scope.tiering[8];
            break;                
        }
        
        
        $scope.t1_size = model.t1;
        $scope.t2_size = model.t2;
        $scope.t3_size = model.t3;
        $scope.t4_size = model.t4;
        $scope.t5_size = model.t5;
        
        
        $('#t1').hide();
        $('#t2').hide();
        $('#t3').hide();
        $('#t4').hide();
        $('#t5').hide();
        
        $('#guestWarning').hide();//reset the guestWarning to be hidden
        
        if(model.show == 2){
            $('#t1').show();
            $('#t2').show();
        }else if(model.show == 3){
            $('#t1').show();
            $('#t2').show();
            $('#t3').show();            
        }else if(model.show == 4){
            $('#t1').show();
            $('#t2').show();
            $('#t3').show();
            $('#t4').show();            
        }else if(model.show == 5){
            $('#t1').show();
            $('#t2').show();
            $('#t3').show();
            $('#t4').show(); 
            $('#t5').show();
        }else{//catch all
            //alert('Please select the number of guests!');
            $('#guestWarning').show();//if no guestNumber is selected, show the warning
        }
        
    }
    
        $scope.setPackage = function(){
            if($scope.package != 'other'){
                $('#basePrice').hide();   
            }else{
                $('#basePrice').show();   
            }
        }
    
        $('#t1').hide();
        $('#t2').hide();
        $('#t3').hide();
        $('#t4').hide();
        $('#t5').hide();
    
    $interval(function(){
        
        
        if($scope.package != 'other'){//calculate the balance
            $scope.balance = Math.round((Number($scope.flower_price) + Number($scope.rolled_chocolate_price) + Number($scope.tiering_price) + Number($scope.delivery_price))*100)/100; 
        }else{
            $scope.balance = Math.round((Number($scope.flower_price) + Number($scope.rolled_chocolate_price) + Number($scope.tiering_price) + Number($scope.delivery_price) + Number($scope.base_price))*100)/100;     
        }
    }, 1000);
    

    
    
});