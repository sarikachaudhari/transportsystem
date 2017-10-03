var app = angular.module("transportApp")
.controller("customer_dashboardCtrl",function($scope){
	console.log("customer_dashboardCtrl loaded...");
	
	$scope.BookTrip = function(){
		confirm("your trip is booked");
	}
});