var app = angular.module("transportApp");
app.controller("Truck_detailsCtrl",function($scope,$state){
	console.log("truckdetailCtrl loaded...");
	$scope.TruckDetails =
            { 'truckid':null, 'trucknumber':null, 'truckowner':null,
              'weightcapacity':null, 'fuel':null, 'carrymaterial':null
            };
	$scope.submitData = function(){
		console.log("$scope.TruckDetails",$scope.TruckDetails);
	}

	$scope.Cnacle = function(){
		$scope.truckid = null;
		$scope.trucknumber=null;
		$scope.truckowner=null;
		$scope.weightcapacity=null;
		$scope.truccarrymaterialknumber=null;
		// $scope.trucknumber=null;
	}
});