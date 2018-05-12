'use strict';
angular.module('app').controller('positionCtrl', ['$scope','$http','$state',function($scope,$http,$state){
   $scope.isLogin=false;
   $http.get('/data/position.json?id='+$state.params.id).then(function(resp){
     $scope.position=resp;
   });
}]);
