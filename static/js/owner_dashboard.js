var app = angular.module("transportApp")
.controller("owner_dashboardCtrl",function($scope){
	console.log("owner_dashboardCtrl loaded...");
	$scope.TruckDetails ={
		Fname:null,
		Lname:null,
		ContactNo:null,
		Email:null,
		City:null,
		State:null,
		address:null,
		Id:null,
		Number:null,
		Trucktype:null,
		fuel:null,
		route:null,
	}
	$scope.OwnerInfo = function(){
		console.log("$scope.TruckDetails",$scope.TruckDetails);
	}
	 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});

