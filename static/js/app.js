angular.module('transportApp', ['transportApp.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl:'../html_templates/login.html',
		controller:'loginCtrl'
	}) 
	.state('customer_reg', {
		url: '/customer_reg',
		templateUrl:'../html_templates/customer_reg.html',
		controller:'customerCtrl'
	})


	.state('Owner_Reg', {
		url: '/Owner_Reg',
		templateUrl:'../html_templates/Owner_Reg.html',
		controller:'transportCtrl'
	})

	.state('Truckowner', {
		url: '/Truckowner',
		templateUrl:'../html_templates/Owner_Login.html',
		// controller:'transportCtrl'
	})

	.state('owner_dashboard', {
		url: '/owner_dashboard',
		templateUrl:'../html_templates/owner_dashboard.html',
		controller:'owner_dashboardCtrl'
	})

	.state('customer_dashboard', {
		url: '/customer_dashboard',
		templateUrl:'../html_templates/customer_dashboard.html',
		controller:'customer_dashboardCtrl'
	})
	.state('Add_truck', {
		url: '/Add_truck',
		templateUrl:'../html_templates/Add_truck.html',
		controller:'owner_dashboardCtrl'
	})
	.state('Trip_history', {
		url: '/customeTrip_historyr_dashboard',
		templateUrl:'../html_templates/Trip_history.html',
		// controller:'customer_dashboardCtrl'
	});

	$urlRouterProvider.otherwise('/');
}); //config ends
