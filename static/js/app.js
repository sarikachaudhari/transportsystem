angular.module('transportApp', ['transportApp.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider


// 	.state('TruckDetails', {
// 		url: '/TruckDetails',
// 		templateUrl:'../html_templates/Truck_Details.html',
// 		controller:'Truck_detailsCtrl'
// })

	.state('login', {
		url: '/login',
		templateUrl:'../html_templates/login.html',
		// controller:'loginCtrl'
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
		controller:'transportCtrl'

})

	.state('OwnerDashboard', {
		url: '/OwnerDashboard',
		templateUrl:'../html_templates/OwnerDashboard.html',
		controller:'OwnerDashboardCtrl'
})

	.state('OwnerRegDashboard', {
		url: '/OwnerRegDashboard',
		templateUrl:'../html_templates/Owner_Login.html',
		controller:'OwnerRegDashboardCtrl'

})

	.state('customer_dashboard', {
		url: '/customer_dashboard',
		templateUrl:'../html_templates/customer_dashboard.html',
		//controller:'customer_dashboardCtrl'
	});

	$urlRouterProvider.otherwise('/');
}); 
