var Task3 = angular.module('Task3', []);

Task3.controller('CtrlT3', function CtrlT3 ($scope) {
    $scope.mas = [];
    $scope.input ='';

    $scope.AddIn = function () {

        $scope.mas.push($scope.input)

    }


})