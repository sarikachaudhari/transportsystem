angular.module('transportApp.controllers',[])
.controller('transportCtrl', function($log,$scope){
console.log("DesignerCategoryGallery loaded...");

$scope.owner_submit= { owner:null,
            email:null, 
            contact:null,
            address:null,
            maxtrcuk:null,
            city:null,
            trucktype:null,
            };

        $scope.saveData  = function() {
        console.log('user',$scope.owner_submit);
}
}

);