angular.module('moreShopModule',[])


    .controller('moreShopCtrl',['$scope',function($scope){
        $scope.arr8=JSON.parse(localStorage.getItem('categoryMore'));
        console.log($scope.arr8);
        $scope.moreShopLi=function(obj1){
            var arrTemp = JSON.parse(localStorage.getItem('moreShop'));
        }
    }])