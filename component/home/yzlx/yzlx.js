/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('yzlxModule',[])
    .service('yzlxService1',['$http',function ($http) {
        return $http.get('resource/yizhouliuxing/top/yizhouclass.json');
    }])
    .service('yzlxService2',['$http',function ($http) {
        return $http.get('resource/yizhouliuxing/mian/yizhou2.json');
    }])
    .service('yzlxService3',['$http',function ($http) {
        return $http.get('resource/yizhouliuxing/mian/yizhou3.json');
    }])
    .controller('yzlxCtrl',['$scope','yzlxService1','yzlxService2','yzlxService3',function($scope,yzlxService1,yzlxService2,yzlxService3){
        yzlxService1.success(function (res) {

            $scope.arr1=[];
            $scope.arr1=res.data.list;
        })
        yzlxService2.success(function (res) {
            console.log(res);
            $scope.arr2=[];
            $scope.arr2=res.data.list;
        })
        yzlxService3.success(function (res) {

        })
    }])