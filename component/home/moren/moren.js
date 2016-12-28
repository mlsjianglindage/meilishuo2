/**
 * Created by YZTC on 2016/12/24.
 */
angular.module('morenModule',[])
    .service('morenService1',['$http',function ($http) {
       // return $http.get('resource/home/moren.json');
    }])
    .controller('morenCtrl',['$scope','morenService1',function($scope,morenService1){
       // morenService1.success(function (res) {
         //   console.log(res);
         //   $scope.arr=res.data;
      //  })
    }])




