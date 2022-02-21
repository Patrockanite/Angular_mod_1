(function(){
    'use strict';
    angular.module('LunchCheck',[]).controller('LC_Controller',LC_Controller);
    LC_Controller.$inject=['$scope'];

    function LC_Controller($scope){ 
        $scope.petits_plats = "";
        $scope.diet_message ="" ;

        $scope.diet_check = function(){
            var NbFood =  $scope.countFood();
            console.log(NbFood);
            if(NbFood===0){
                $scope.diet_message = "Please enter data first";
            }
            if(NbFood>0 && NbFood<=3){
                $scope.diet_message = "Enjoy!";
            }
            if(NbFood>3){
                $scope.diet_message = "Too much!";
            }
           
        };
        $scope.countFood = function(){
            if($scope.petits_plats.split(",")[0]===""){
                return 0;
            }
            else{                
            return $scope.petits_plats.split(",").length;
            }
        };
       
        
    }
   
   

})();