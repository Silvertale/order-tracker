var app = angular.module("create_app", ['ui.bootstrap']);

app.controller("create_controller", function($scope){
  //look at package for show basePrice
  //Show only the number of tiers we are using
  //pre-assign tier sizes by r_people
  //...
    
    
    
    //when $scope.r_guests changes, update the tiering info by turning on or off id="t#"
    
    $scope.t1_size = '10"';
    $scope.t2_size = '10"';
    $scope.t3_size = '10"';
    $scope.t4_size = '10"';
    $scope.t5_size = '10"';
    
    $scope.t1_flavor = 'sgm';
    $scope.t2_flavor = 'sgm';
    $scope.t3_flavor = 'sgm';
    $scope.t4_flavor = 'sgm';
    $scope.t5_flavor = 'sgm';
    
    $scope.t1_filling = 'chocolate mousse';
    $scope.t2_filling = 'chocolate mousse';
    $scope.t3_filling = 'chocolate mousse';
    $scope.t4_filling = 'chocolate mousse';
    $scope.t5_filling = 'chocolate mousse';


    $scope.sizes = ['8"', '9"', '10"', '12"', '14"', '16"', '18"', '20"']
    $scope.flavors = ['Gold Cake', 'Chocolate Cake', 'Marble Cake', 'Pecan Cake', 'Hazelnut Cake', 'Pumpkin Spice Cake', 'Cranberry Walnut Cake', 'Carrot Cake', 'Carrot Cranberry Cake'];
    $scope.fillings = ['White Chocolate Mousse', 'Chocolate Mousse', 'Chocolate Mocha Mousse', 'Mascarpone Mousse', 'Raspberry Chambord Mousse', 'Orange Champagne Mousse', 'Lemon Mousse', 'Chocolate Champagne Mousse', 'Chocolate Kahlua Mousse', 'Chocolate Baileys Cream', 'White Chocolate Cognac Truffle Mousse', 'Banana Mousse', 'Raspberry Mousse'];
    $scope.tiering = [{people:"40", t1:'8"', t2:'12"', t3:'', t4:'', t5:'', show:2}, {people:'50', t1:'8"', t2:'14"', t3:'', t4:'', t5:'', show:2}, {people:'60', t1:'8"', t2:'16"', t3:'', t4:'', t5:'', show:2}, {people:'75', t1:'6"', t2:'10"', t3:'14"', t4:'', t5:'', show:3}, {people:'90', t1:'8"', t2:'15"', t3:'16"', t4:'', t5:'', show:3}, {people:'125', t1:'6"', t2:'9"', t3:'12"', t4:'16"', t5:'', show:4}, {people:'150', t1:'6"', t2:'10"', t3:'14"', t4:'18"', t5:'', show:4}, {poeple:'225', t1:'8"', t2:'12"', t3:'16"', t4:'20"', t5:'', show:4}, {people:'250', t1:'6"', t2:'9"', t3:'12"', t4:'16"', t5:'20"', show:5}];
    
    $scope.guests = ['40', '50', '60', '75', '90', '125', '150', '225', '250'];//number of guests categories
    
    
    
    
    
    
    
});