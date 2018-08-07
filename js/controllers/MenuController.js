/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('MenuController', function($scope, $state) {

    $scope.items = [
        {
            id: 1,
            name: "Pepperoni Pizza",
            size: ["Small", "Medium","Large"],
            price: 18,
            description: "Thin crust pizza with pepperoni, mozzarella and tomato sauce.",
            img: 'img/pizza.jpg'
        },
        {
            id: 2,
            name: "Cheese Burger",
            size: ["Small", "Medium", "Large"],
            price: 15,
            description: "Grilled beef burger with pickles, lettuce, tomato and mayonnaise.",
            img: 'img/burger.jpg'
        },
        {
            id: 3,
            name: "Mozzarella Sticks",
            size: ["Small", "Medium", "Large"],
            price: 7,
            description: "6 Fingers of mozzarella sticks served with dipping.",
            img: 'img/mozSticks.jpg'
        },
        {
            id: 4,
            name: "Salmon Steak",
            size: ["Small", "Medium", "Large"],
            price: 21,
            description: "Thick slice of salmon steak served with vegetables.",
            img: 'img/salmon.jpg'
        },
        {
            id:5,
            name: "Pancakes",
            size: ["Small", "Medium", "Large"],
            price: 5,
            description: "Freshly baked pancakes with honey, banana and nuts.",
            img: 'img/pancakes.jpg'
        },
        {
            id: 6,
            name: "Soft Drinks",
            size: ["Small", "Medium", "Large"],
            price: 2,
            description: "Choose from Diet Coke, Fanta, Mountain Dew or Sprit.",
            img: 'img/cola.jpg'
        },
        {
            id: 7,
            name: "Lemonade",
            size: ["Small", "Medium", "Large"],
            price: 3,
            description: "Refreshing Cold Lemonade with ice cubes.",
            img: 'img/lemonade.jpg'
        }
    ];

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

        $scope.cartItems.push($scope.selectedObj);

        $scope.selectedObj = {};

        $scope.cnt += 1;

        //
        // $scope.selectedItem = {};
        // $scope.selectedSize = {};
        //console.log($scope.cartItems);
        //console.log($scope.cnt);
    }

    $scope.sendCart = function () {

        $state.go('cart', {items:$scope.cartItems});
    }

});