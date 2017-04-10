'use strict';

angular.module('app.directive', [])
.directive('example', function() {
  return {
    restrict: 'EA',
    templateUrl: '../views/example.html'
  };
});
