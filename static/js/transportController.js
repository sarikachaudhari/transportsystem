angular.module('transportApp.controllers',[])
.controller('transportCtrl', function($log,$scope,$state){
console.log(" transportCtrl loaded...");
	$scope.isloggedIn = false;
$scope.owner_submit= { owner:null,
            email:null, 
            contact:null,
            address:null,
            city:null,
            password:null,
            };

        $scope.saveData  = function() {
        console.log('user',$scope.owner_submit);
}
});
