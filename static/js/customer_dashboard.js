var app = angular.module("transportApp")
.controller("customer_dashboardCtrl",function($scope){
	console.log("customer_dashboardCtrl loaded...");

	$scope.tripRoutes = [
	{
		"route":"Mumbai to Jalgaon",
		"owner": [
		{
			"Name": "Ram",
			"trucktype":"MiniTruck",
		},
		{
			"Name": "Shyam",
			"trucktype":"Tempo",
		},
		{
			"Name": "Harry",
			"trucktype":"Tempo",
		},
		]
	},

	{
		"route":"Nashik to Jalgaon",
		"owner": [{
			"Name": "Santa",
			"trucktype":"MiniTruck",
		},
		{
			"Name": "Shyam",
			"trucktype":"Tempo",
		},
		{
			"Name": "Harry",
			"trucktype":"MiniTruck",
		},
		]
	},
	{
		"route":"Mumbai to Aurangabad",
		"owner": [
		{
			"Name": "Ram",
			"trucktype":"MiniTruck",
		},
		{
			"Name": "Shyam",
			"trucktype":"Tempo",
		},
		{
			"Name": "Harry",
			"trucktype":"Tempo",
		},
		]
	},
	];

	$scope.Search = function(keyEvent) {
		if (keyEvent.which === 13)
			$scope.searchTrip();
	}
	$scope.searchTrip = function(){
		console.log("function call");
		if($scope.searchtext =="" || $scope.searchtext =="undefined"){
			alert("please enter text to search");
		}
		else{
			console.log("Else");
			$scope.searchtripDetails();
		}
	}

	$scope.templist = angular.copy($scope.tripRoutes);
	$scope.searchtripDetails =function(){
		console.log("$scope.tripRoutes",$scope.tripRoutes);
		var matchList = [];

	}
});



