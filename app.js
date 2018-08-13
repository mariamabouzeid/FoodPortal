/**
 * Created by Mariam on 27-Jul-18.
 */

var app = angular.module('app', ['ui.router', 'base64'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home',
            {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .state('cart',
            {
                url: '/cart',
                templateUrl: 'templates/cart.html',
                controller: 'CartController',
                params: {
                    items: null
                }
            })
            .state('checkout',
            {
                url: '/checkout',
                templateUrl: 'templates/checkout.html',
                controller: 'CheckController',
                params: {
                    final: null
                }
            })
            .state('complaints',
            {
                url: '/complaints',
                templateUrl: 'templates/complaints.html',
                controller: 'ComplaintsController'
            })
            .state('menu',
            {
                url: '/menu',
                templateUrl: 'templates/menu.html',
                controller: 'MenuController'
            });
    });
