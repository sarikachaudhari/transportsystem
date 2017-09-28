angular.module('transportApp', ['transportApp.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('login', {
		url: '/login/:username/:password',
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

	.state('customer_dashboard', {
		url: '/customer_dashboard',
		templateUrl:'../html_templates/customer_dashboard.html',
		//controller:'customer_dashboardCtrl'
	});

	$urlRouterProvider.otherwise('/login');
}); //config ends
