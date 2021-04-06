(function() {
  'use strict'
  let x = 'name';
  angular.module('myFirstApp', [])
    .controller('myFirstController', function($scope) {
        $scope.name = "Ricardo";

        $scope.sayHello = function() {
            return "hello coursera";
        }
    });
})();
