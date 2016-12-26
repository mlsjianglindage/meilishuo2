angular.module('moreModule',[])
    .service('dataMore',['$http',function($http){
        return $http.get('resource/erjiyemian/category2.json')
    }])
    .service('dataMore1',['$http',function($http){
        return $http.get('resource/erjiyemian/category1.json')
    }])
    .service('dataMore2',['$http',function($http){
        return $http.get('resource/erjiyemian/category3.json')
    }])
    .controller('moreCtrl',['$scope','dataMore','dataMore1','dataMore2','$location', '$anchorScroll',function($scope,dataMore,dataMore1,dataMore2,$location, $anchorScroll){
        dataMore.success(function(res){
            $scope.arr = res.data1.list;
            // console.log(res.data1.list)
        })
        dataMore1.success(function(res){
            $scope.arr1 = res.data1.list;
            // console.log(res.data1.list)
        })
        dataMore2.success(function(res){
            $scope.arr2 = res.data1.list;
            // console.log(res.data1.list)
        })
        $scope.moreFashion=function(){
            $scope.show1=false;
            $scope.show2=true;
            $scope.show3=true;
            $scope.moreChangeColor1=true;
            $scope.moreChangeColor2=false;
            $scope.moreChangeColor3=false;
        }
        $scope.moreHot=function(){
            $scope.show2=false;
            $scope.show1=true;
            $scope.show3=true;
            $scope.moreChangeColor2=true;
            $scope.moreChangeColor1=false;
            $scope.moreChangeColor3=false;
        }
        $scope.morePrice=function(){
            $scope.show3=false;
            $scope.show2=true;
            $scope.show1=true;
            $scope.moreChangeColor3=true;
            $scope.moreChangeColor2=false;
            $scope.moreChangeColor1=false;
        }
        $scope.moreGoTop=function(){
            $location.hash('categoryTopimg');
            $anchorScroll();
            // console.log('dd')
        }

    }])