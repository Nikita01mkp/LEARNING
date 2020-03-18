var Task3 = angular.module('Task3', []);

Task3.controller('CtrlT3', function CtrlT3($scope) {

    $scope.myPoint = '1';
    let currentUser = JSON.parse(localStorage.getItem($scope.myPoint));
    $scope.name = currentUser.userName;
    $scope.age = currentUser.userOld;
    $scope.gender = currentUser.userGender;
    $scope.oldPassword = '';
    $scope.newPassword = '';
    $scope.reNewPassword = '';

    $scope.changeName = function () {
        if($scope.name != '') {
            currentUser.userName = $scope.name;
            let obj = JSON.stringify(currentUser);
            localStorage.setItem($scope.myPoint, obj);
        }
    }

    $scope.changeAge = function () {
        if($scope.age != '') {
            currentUser.userOld = $scope.age;
            let obj = JSON.stringify(currentUser);
            localStorage.setItem($scope.myPoint, obj);
        }
    }

    $scope.changeGender = function () {
        if($scope.gender != '') {
            currentUser.userGender = $scope.gender;
            let obj = JSON.stringify(currentUser);
            localStorage.setItem($scope.myPoint, obj);
        }
    }

    $scope.changePass = function () { //реализовать

    }




})