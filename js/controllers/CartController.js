/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('CartController', function($scope, $state, $stateParams) {

    console.log("inside the controller");
     $scope.listItems = $stateParams.items;
    console.log($scope.listItems);

    $scope.getTotal = function () {
        var sum = 0;
        for(var i in $scope.listItems){
            sum = sum + parseInt($scope.listItems[i].item.price);
        }
        return sum;
    }

    $scope.remove = function(item){
        $scope.listItems = $scope.listItems.filter(function(el) { return el.name != item.name; });
        //console.log($scope.listItems);
    }

    $scope.sendCheckout = function () {
        $state.go('checkout', {final:$scope.listItems});
    }
});