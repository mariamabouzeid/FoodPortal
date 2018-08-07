/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('HomeController', function($scope) {

    $scope.notLogged = true;
    $scope.logged = false;


    $scope.logUserIn = function () {
        $scope.notLogged = false;
        $scope.logged = true;
        console.log("Exiting function");
    }

});