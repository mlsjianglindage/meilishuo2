angular.module('searchModule',[])
    .service('search1',['$http',function($http){
        return $http.get('resource/category/1.json');
    }])
    .controller('searchCtrl',['$scope','search1',function($scope,search1){
        search1.success(function(res){
            $scope.arr = res.data[15325].list;
            $scope.arr1 = res.data[17118].list;
            // console.log(res.data);
        })

    }])