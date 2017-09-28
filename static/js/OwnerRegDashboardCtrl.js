var app = angular.module('transportApp');
app.controller('OwnerRegDashboardCtrl',function($state,$scope,$stateParams){
	console.log("OwnerRegCtrl loaded...");
	console.log($stateParams)
		$scope.owner=$stateParams.owner;
        $scope.email=$stateParams.email;
        $scope.contact=$stateParams.contact;
        $scope.address=$stateParams.address;
        $scope.city=$stateParams.city;
        $scope.password=$stateParams.password;

});