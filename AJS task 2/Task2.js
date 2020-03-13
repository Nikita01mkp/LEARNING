var Task2 = angular.module('Task2', []);

Task2.controller('CtrlT2', function CtrlT2 ($scope) {

    $scope.Show = function () {

        alert($scope.select);

    }

})