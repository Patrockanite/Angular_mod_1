(function(){
    'use strict';
    angular.module('LunchCheck',[]).controller('LC_Controller',LC_Controller);
    LC_Controller.$inject=['$scope'];

    function LC_Controller($scope, $filter, $injector){
        $scope.petits_plats = "";

        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
            
        };
        
    }
   
   

})();