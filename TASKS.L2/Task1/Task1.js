
var Task1 = angular.module('Task1', []);

Task1.controller('CtrlT1', function CtrlT1($scope) {

    $scope.hasErrLog = '';
    $scope.hasErrPass = '';
    $scope.hasErrMail = '';
    $scope.login = '';
    $scope.password = '';
    $scope.rePassword = '';
    $scope.mail = '';
    $scope.myPoint = localStorage.getItem('Point');
    $scope.mas = [];
    $scope.old = '';
    $scope.name = '';

    $scope.hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    }

    $scope.send = function () {

        if(!($scope.login === '') && !($scope.password === '') && ($scope.password === $scope.rePassword) && !($scope.mail === '')){
            $scope.mas[$scope.myPoint] = {};
            $scope.mas[$scope.myPoint].userLogin = $scope.login;
            let saltPass = $scope.password + $scope.mail;
            $scope.mas[$scope.myPoint].userPassword =  $scope.hashCode(saltPass);
            $scope.mas[$scope.myPoint].userEmail = $scope.mail;
            $scope.mas[$scope.myPoint].userName = $scope.name;
            $scope.mas[$scope.myPoint].userOld = $scope.old;
            let serialObj = JSON.stringify($scope.mas[$scope.myPoint]);
            localStorage.setItem($scope.myPoint, serialObj);
            $scope.myPoint++;
            localStorage.setItem('Point', $scope.myPoint);
            $scope.login = '';
            $scope.password = '';
            $scope.rePassword = '';
            $scope.mail = '';
            $scope.old = '';
            $scope.name = '';

        }else {

            if ($scope.login === '') {
                $scope.hasErrLog = 'is-invalid';
            }
            if (($scope.password === '') || !($scope.password === $scope.rePassword)) {
                $scope.hasErrPass = 'is-invalid';
            }
            if ($scope.mail === '') {
                $scope.hasErrMail = 'is-invalid';
            }
        }
    }

    $scope.validBack = function (i) {

        switch (i) {
            case '1':
                $scope.hasErrLog = '';
                break;
            case '2':
                $scope.hasErrPass = '';
                $scope.hasErrPass = '';
                break;
            case '3':
                $scope.hasErrMail = '';
        }

    }



})