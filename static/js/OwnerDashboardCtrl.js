var app = angular.module("transportApp");
app.controller("OwnerDashboardCtrl",function($rootScope, $scope,$stateParams,$state){
	console.log("OwnerLoginCtrl loaded...");
	console.log($stateParams)
$scope.isloggedIn = true;
$rootScope.$emit('loginChange', true);
	$scope.user=$stateParams.user;
	$scope.pass=$stateParams.pass;
});