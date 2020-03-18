var Task2 = angular.module('Task2', []);

Task2.controller('CtrlT2', function CtrlT2($scope) {

    $scope.hasErrLog = '';
    $scope.hasErrPass = '';
    $scope.login = '';
    $scope.password = '';
    $scope.mail = '';
    $scope.mas = [];
    $scope.myPoint = '';

    $scope.hashCode = function(s){
        return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
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

    $scope.comeIn = function () {


        if(!($scope.login === '') && !($scope.password === '')){
            let i = 0;
            for(i = 0; i < (localStorage.length-1); i++){
                $scope.mas[i] = JSON.parse(localStorage.getItem(i));
                if($scope.login === $scope.mas[i].userLogin){
                    $scope.comparePass(i);
                    break;
                }
            }
            if(i === (localStorage.length - 1)){
                alert('Пользователь не существует')
            }

        }else {

            if ($scope.login === '') {
                $scope.hasErrLog = 'is-invalid';
            }
            if (($scope.password === '') || !($scope.password === $scope.rePassword)) {
                $scope.hasErrPass = 'is-invalid';
            }
        }
    }

    $scope.comparePass = function (key) {


        let myObj = JSON.parse(localStorage.getItem(key));
        let saltPass = $scope.password + myObj.userEmail;
        let hashPass = $scope.hashCode(saltPass);
        if (hashPass === myObj.userPassword){
            alert("Welcome!")
        } else{
            $scope.password = '';
            $scope.hasErrPass = 'is-invalid';
        }

    }


})