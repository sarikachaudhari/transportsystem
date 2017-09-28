var app = angular.module("transportApp")
.controller("loginCtrl",function($scope,$state,$stateParams){
	console.log("loginCtrl loaded...");
	console.log(" $stateParams",$stateParams);
	$scope.username = $stateParams.username;
	$scope.password = $stateParams.password;
});