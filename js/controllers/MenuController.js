/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('MenuController', function($scope, $state, $http, $base64, $rootScope) {


    $scope.auth = $base64.encode( $rootScope.globalUsername + ":" +  $rootScope.globalPassword);

    $http({
        method : "GET",
        url : "http://localhost:8880/foodportal/secured/menu",
        headers: {
            "Authorization": "Basic " + $scope.auth
        }
    }).then(function Success(response) {
        $scope.items = response.data;
        console.log($scope.items);
    }, function Error(response) {
        $scope.items = response.statusText;
    });

    $scope.selectedItem = {};
    $scope.selectedSize = {};

    $scope.selectedObj = {};

    $scope.cartItems = [];
    $scope.cnt = 0;


    $scope.addToCart = function (item, selected) {
        $scope.selectedItem = item;
        $scope.selectedSize = selected;

        $scope.selectedObj.item = $scope.selectedItem;
        $scope.selectedObj.size = $scope.selectedSize;

        console.log($scope.selectedObj);

        $scope.cartItems.push($scope.selectedObj);

        $scope.selectedObj = {};

        $scope.cnt += 1;

    }

    $scope.sendCart = function () {

        $state.go('cart', {items: $scope.cartItems});
    }

});