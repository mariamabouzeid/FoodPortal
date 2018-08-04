/**
 * Created by Mariam on 27-Jul-18.
 */

var app = angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/',
            {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            });
        $routeProvider.when('/cart',
            {
                templateUrl: 'templates/cart.html',
                controller: 'CartController'
            });
        $routeProvider.when('/checkout',
            {
                templateUrl: 'templates/checkout.html',
                controller: 'CheckoutController'
            });
        $routeProvider.when('/complaints',
            {
                templateUrl: 'templates/complaints.html',
                controller: 'ComplaintsController'
            });
        $routeProvider.when('/login',
            {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            });
        $routeProvider.when('/menu',
            {
                templateUrl: 'templates/menu.html',
                controller: 'MenuController'
            });
        $routeProvider.when('/registration',
            {
                templateUrl: 'templates/registration.html',
                controller: 'RegistrationController'
            });
        $routeProvider.otherwise({redirectTo: '/'});
    });

app.config(function($locationProvider) {

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: true
    })
});