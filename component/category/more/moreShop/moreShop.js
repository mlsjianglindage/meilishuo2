angular.module('moreShopModule',[])


    .controller('moreShopCtrl',['$scope',function($scope){
        $scope.arr8=JSON.parse(localStorage.getItem('categoryMore'));
        console.log($scope.arr8);
        // $scope.moreShopLi=function(obj1){
        //     var arrTemp = JSON.parse(localStorage.getItem('moreShop'));
        // }
        //点击确定后，向购物车页面写入数据
        $scope.arrLocalstorage=[];

        $scope.moreShopLi=function(aaa){
            console.log(aaa);

            var arr02= JSON.parse(localStorage.getItem('moreShop1'));
            if(arr02){
                console.log(arr02);
                var number = 0;
                for(var k=0;k<arr02.length;k++){
                    //console.log(aaa.shopId);
                    //console.log(arr1[k].obj.shopId);
                    if(arr02[k].obj.shopId == aaa.shopId){
                        localStorage.setItem('moreShop1',JSON.stringify(arr02));
                        number=1
                        arr02[k].count++;
                        //console.log(aaa.shopId);
                        break;
                    }
                }
                if(number==0){
                    arr02.push({'count':1,'obj':aaa});
                    localStorage.setItem('moreShop1',JSON.stringify(arr02));
                }
            }else {
                $scope.arrLocalstorage.push({'count':1,'obj':aaa});
                localStorage.setItem('moreShop1',JSON.stringify($scope.arrLocalstorage));
                console.log($scope.arrLocalstorage);
            }
        }

    }])