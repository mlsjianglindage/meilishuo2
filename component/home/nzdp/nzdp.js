/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('nzdpModule',[])
    .service('nzdpServers1',['$http',function ($http) {
        return $http.get('resource/nvzhuangdapai/all/01.json')
    }])
    .service('nzdpServers2',['$http',function ($http) {
        return $http.get('resource/nvzhuangdapai/qunzi/01.json')
    }])
    .service('nzdpServers3',['$http',function ($http) {
        return $http.get('resource/nvzhuangdapai/shangzhuang/01.json')
    }])
    .service('nzdpServers4',['$http',function ($http) {
        return $http.get('resource/nvzhuangdapai/xiazhuang/01.json')
    }])
    .controller('nzdpCtrl',['$scope','nzdpServers1','nzdpServers2','nzdpServers3','nzdpServers4',function($scope,nzdpServers1,nzdpServers2,nzdpServers3,nzdpServers4){
        $scope.look=function (obj) {
           //  console.log(obj);
           //  $scope.arr5=[];
           //  $scope.arr5=obj;
           //  console.log($scope.arr5);
           //  var arrTemp = JSON.parse(localStorage.getItem('productDetail'));
           // // arrTemp.push($scope.arr5[]);
           //  localStorage.setItem('productDetail',JSON.stringify(arrTemp));
           //  $scope.arr = JSON.parse(localStorage.getItem('productDetail'));
           //  console.log($scope.arr);
            localStorage.setItem("hhhh",JSON.stringify(obj));
            // $scope.sssss=JSON.parse(localStorage.getItem('sure'));
            // console.log( $scope.sssss);
        }

        nzdpServers1.success(function (res) {
            $scope.arr1=res.data.list;

        })
        nzdpServers2.success(function (res) {

        })
        nzdpServers3.success(function (res) {

        })
        nzdpServers4.success(function (res) {

        })
    }])