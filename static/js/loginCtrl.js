var app = angular.module("transportApp")
.controller("loginCtrl",function($scope,$state,$stateParams){
	console.log("loginCtrl loaded...");
	console.log(" $stateParams",$stateParams);
	$scope.username = $stateParams.username;
	$scope.password = $stateParams.password;

	$scope.login_customer = function(){
		$state.go("customer_dashboard");
	}
});