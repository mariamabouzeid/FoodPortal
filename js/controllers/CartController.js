/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('CartController', function($scope, $state, $stateParams, $http, $base64, $rootScope) {

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

    $scope.remove = function(foodObject){
        $scope.listItems = $scope.listItems.filter(function(el) { return el.item.name != foodObject.item.name; });
        //console.log($scope.listItems);
    }

    $scope.sendCheckout = function () {
        $state.go('checkout', {final:$scope.listItems});
    }

    $scope.orderData = {
        userId: $rootScope.id,
        orderItems: []
    };

    $scope.postOrder = function () {

        for(var i in $scope.listItems){
            var sId = 0;
            if($scope.listItems[i].size == "Small")
                sId = 1;
            else if($scope.listItems[i].size == "Medium")
                sId = 2;
            else
                sId= 3;
            var orderItem = {
                itemId: $scope.listItems[i].item.id,
                sizeId: sId
            }
            $scope.orderData.orderItems.push(orderItem);
        }
        console.log($scope.orderData);

        console.log($rootScope.globalUsername);
        console.log($rootScope.globalPassword);
        var auth = $base64.encode($rootScope.globalUsername + ":" + $rootScope.globalPassword);
        var headers = {"Authorization": "Basic " + auth};


        $http.post("http://localhost:8880/foodportal/secured/checkout", JSON.stringify($scope.orderData), {headers: headers}).then(function (response) {

            if (response.data)
                $scope.msg = "Post Data Submitted Successfully!";

        }, function (response) {

            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();

        });
    }
});