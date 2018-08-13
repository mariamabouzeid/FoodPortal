/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('HomeController', function($scope, $http, $base64, $rootScope) {

    $scope.notLogged = true;
    $scope.logged = false;

    $scope.username = null;
    $scope.password = null;

    $scope.userSignUpInfo = {
        userName: null,
        password: null,
        phoneNumber: null,
        address1: null,
        address2: null
    }

    $scope.logUserIn = function (username, password) {

        $rootScope.globalUsername = username;
        $rootScope.globalPassword = password;

        console.log( $rootScope.globalUsername);
        console.log( $rootScope.globalPassword);

        var auth = $base64.encode($rootScope.globalUsername + ":" + $rootScope.globalPassword);
        console.log(auth);

        $http({
            method : "GET",
            url : "http://localhost:8880/foodportal/secured/user",
            headers: {
                "Authorization": "Basic " + auth
            }
        }).then(function Success(response) {
            $rootScope.id = response.data;
            $scope.notLogged = false;
            $scope.logged = true;
            console.log($rootScope.id);
        }, function Error(response) {
            $scope.items = response.statusText;
        })

    };

    $scope.signUpInfo = function(username, password, phoneNumber, address1, address2){
        $scope.userSignUpInfo.userName = username;
        $scope.userSignUpInfo.password = password;
        $scope.userSignUpInfo.phoneNumber = phoneNumber;
        $scope.userSignUpInfo.address1 = address1;
        $scope.userSignUpInfo.address2 = address2;

        console.log($scope.userSignUpInfo);

        $http.post("http://localhost:8880/foodportal/addUser", JSON.stringify($scope.userSignUpInfo)).then(function (response) {

            if (response.data)
                $scope.msg = "Post Data Submitted Successfully!";

        }, function (response) {

            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();

        });
    }



});