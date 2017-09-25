angular.module('transportApp', ['transportApp.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl:'../html_templates/login.html',
// controller:'firstCtrl'
})
	.state('TruckDetails', {
		url: '/TruckDetails',
		templateUrl:'../html_templates/Truck_Details.html',
		controller:'Truck_detailsCtrl'
})
	.state('Truckowner', {
		url: '/Truckowner',
		templateUrl:'../html_templates/Truckowner.html',
// controller:'firstCtrl'
});
	$urlRouterProvider.otherwise('/');
}); //config ends