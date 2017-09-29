angular.module('transportApp.controllers',[])
.controller('transportCtrl', function($rootScope, $log,$scope,$state,$stateParams){
console.log("TransportCtrl loaded...");


$scope.isloggedIn = false;


$scope.owner_submit= { owner:null,
            email:null, 
            contact:null,
            address:null,
            city:null,
            password:null,
            };

        $scope.saveData  = function() {
        $state.go('OwnerRegDashboard',{
        		email:$scope.owner_submit.email,
        		owner:$scope.owner_submit.owner,
        		contact:$scope.owner_submit.contact,
        		address:$scope.owner_submit.address,
        		city:$scope.owner_submit.city,
        		password:$scope.owner_submit.password,
        	});
        console.log('user',$scope.owner_submit);
}


$rootScope.$on('loginChange', function(data){
$scope.isloggedIn = data;
});
$scope.login_submit_data = {
		user:null,
		pass:null,
		};
	

	$scope.loginData = function(){
	$state.go('OwnerDashboard',{
			user:$scope.login_submit_data.user,
			pass:$scope.login_submit_data.pass,
		});
		  console.log('user',$scope.login_submit_data);
		}

});