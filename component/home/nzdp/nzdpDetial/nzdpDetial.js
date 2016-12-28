/**
 * Created by YZTC on 2016/12/26.
 */
angular.module('nzdpDetialMoudel',[])
    .controller('nzdpDetialCtrl',['$scope',function ($scope) {
        $scope.obj=JSON.parse(localStorage.getItem('hhhh'));
        console.log( $scope.obj);
        $scope.obj2=JSON.parse(localStorage.getItem('sure2'));
        console.log( $scope.obj2)
    }])



























































