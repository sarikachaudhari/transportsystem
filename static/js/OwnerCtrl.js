    var app = angular.module('transportApp', []);
    app.controller('OwnerCtrl',function($scope){
        $scope.owner = { owner:null,
            email:null,
            contact:null,
            address:null,
            maxtrcuk:null,
            city:null,
            trucktype:null,
            };

        $scope.save  = function() {
        console.log('user',$scope.owner);

        }
    });