var app = angular.module("transportApp")
.controller("customerCtrl",function($scope,$state,$stateParams){
	console.log("customerCtrl loaded...");
	$scope.user ={ 
		name:null,
		username:null, 
		password:null,
		confirmpassword:null,
	};
	$scope.register = function(){
		if($scope.user.password != $scope.user.confirmpassword){
			alert("password not match");
		}
		else{
			console.log('$scope.user',$scope.user); 
		$state.go("login",{ username: $scope.user.username, password:$scope.user.password});
		}
	}

});