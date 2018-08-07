/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('CheckController', function($scope, $stateParams) {

    $scope.purchased = $stateParams.final;
    console.log($scope.purchased);

    $scope.getTotal = function () {
        var sum = 0;
        for(var i in $scope.purchased){
            sum = sum + parseInt($scope.purchased[i].item.price);
        }
        return sum;
    }

});