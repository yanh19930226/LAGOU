'use strict';
angular.module('app').controller('mainCtrl', ['$http', '$scope', function($http, $scope){
  // $http.get('/data/positionList.json').then(function(resp){
  //   $scope.list= resp;
  // });
       $scope.list=[
         {
         id:'1',
         name:'销售',
         imageUrl:'images/company-3.png',
         companyName:'百度',
         cityName:'北京',
         industryName:'互联网',
         date:'2018-05-12'
       },
       {
       id:'1',
       name:'销售',
       imageUrl:'images/company-1.png',
       companyName:'百度',
       cityName:'北京',
       industryName:'互联网',
       date:'2018-05-12'
     }];
}]);
