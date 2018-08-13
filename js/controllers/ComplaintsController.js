/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('ComplaintsController', function($scope, $http, $base64, $rootScope) {

    $scope.complaint = {};

    $scope.addComplaint = function(sbjt, mesg){
        $scope.complaint = {
            subject: sbjt,
            message: mesg,
            userId: $rootScope.id
        }

        console.log($scope.complaint);

        var auth = $base64.encode($rootScope.globalUsername + ":" + $rootScope.globalPassword);
        var headers = {"Authorization": "Basic " + auth};

        $http.post("http://localhost:8880/foodportal/secured/complaints", JSON.stringify($scope.complaint), {headers: headers})
            .then(function (response) {

            if (response.data)
                $scope.msg = "Post Data Submitted Successfully!";

        }, function (response) {

            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();

        });
    }
});