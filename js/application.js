var mainModule = angular.module("mainModule", [ 'ngRoute']);

mainModule.controller("mainCtrlr", function($scope){
   $scope.boo = (typeof $().emulateTransitionEnd == 'function');
});
