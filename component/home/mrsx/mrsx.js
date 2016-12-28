/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('mrsxModule',[])
    .service('MrsxService1',['$http',function ($http) {
        return $http.get('resource/meirishangxin/12.18/01.json');
    }])
    .service('MrsxService2',['$http',function ($http) {
        return $http.get('resource/meirishangxin/12.19/01.json');
    }])
    .service('MrsxService3',['$http',function ($http) {
        return $http.get('resource/meirishangxin/12.20/01.json');
    }])
    .service('MrsxService4',['$http',function ($http) {
        return $http.get('resource/meirishangxin/12.21/01.json');
    }])
    .controller('mrsxCtrl',['$scope','MrsxService1','MrsxService2','MrsxService3','MrsxService4',function($scope,MrsxService1,MrsxService2,MrsxService3,MrsxService4){
        //切换tap查看不同的数据
        $scope.flag1=true;
        $scope.flag2=false;
        $scope.flag3=false;
        $scope.flag4=false;
        $scope.mrsxTap1=function () {
            $scope.flag1=true;
            $scope.flag2=false;
            $scope.flag3=false;
            $scope.flag4=false;
        }
        $scope.mrsxTap2=function () {
            $scope.flag1=false;
            $scope.flag2=true;
            $scope.flag3=false;
            $scope.flag4=false;
        }
        $scope.mrsxTap3=function () {
            $scope.flag1=false;
            $scope.flag2=false;
            $scope.flag3=true;
            $scope.flag4=false;
        }
        $scope.mrsxTap4=function () {
            $scope.flag1=false;
            $scope.flag2=false;
            $scope.flag3=false;
            $scope.flag4=true;
        }
        MrsxService1.success(function (res) {
           $scope.arr1=res.data.list;
        });
        MrsxService2.success(function (res) {
            $scope.arr2=res.data.list;
        })
        MrsxService3.success(function (res) {
            $scope.arr3=res.data.list;
        })
        MrsxService4.success(function (res) {
            $scope.arr4=res.data.list;
        })


    }])