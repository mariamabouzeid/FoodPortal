/**
 * Created by Mariam on 31-Jul-18.
 */
'use strict';

app.controller('ComplaintsController', function($scope) {

    $scope.complaints = [];

    $scope.addComplaint = function(sbjt, mesg){
        var temp = {
            subject: sbjt,
            message: mesg
        }
        $scope.complaints.push(temp);

        console.log($scope.complaints)
    }
});