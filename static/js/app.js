angular.module('transportApp', ['transportApp.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl:'../html_templates/login.html',
// controller:'firstCtrl'
})
// 	.state('TruckDetails', {
// 		url: '/TruckDetails',
// 		templateUrl:'../html_templates/Truck_Details.html',
// 		controller:'Truck_detailsCtrl'
// })

	.state('Owner_Reg', {
		url: '/Owner_Reg',
		templateUrl:'../html_templates/Owner_Reg.html',
		controller:'transportCtrl'
})

	.state('Truckowner', {
		url: '/Truckowner',
		templateUrl:'../html_templates/Owner_Login.html',
		// controller:'transportCtrl'
});



	$urlRouterProvider.otherwise('/');
}); //config ends