/**
 * login page logic
 */

var app = angular.module('loginApp',[]);

var testData = {
        'fname':'john',
        'lname':'doe',
        'email':'john.doe@test.com',
        'password':'test'
}

app.controller('loginCtrl',function($scope){

    $scope.loginCheck = function(){
                if((testData.email == $scope.email) && (testData.password == $scope.password)){
                    $scope.loginSuccess = true;
                    $scope.isSuccess = true;
                               
                }
                else{
                    $scope.loginSuccess = false;
                    $scope.isSuccess = false;
                }
    }
});