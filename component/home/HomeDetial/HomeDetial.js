/**
 * Created by YZTC on 2016/12/27.
 */
angular.module('HomeDetialMoudle',[])
    .controller('HomeDetialCtrl',['$scope',function ($scope) {
        $scope.HomeDetialobj=JSON.parse(localStorage.getItem('HomeList'));
        console.log($scope.HomeDetialobj);
        //点击×关闭加入购物车页面
        $scope.close=function () {
            $scope.isShow=false;
        }
        //点击加入购物车

        $scope.isShow=false;
        $scope.toBuyCar=function () {
            $scope.isShow=true;

        }

       //点击确定后，向购物车页面写入数据
        $scope.arrLocalstorage=[];

        $scope.sure=function (aaa) {//向localStorage中写入数据，每次写进去之前要先把上次的给push进数组，不然会被覆盖
          console.log(aaa);
            $scope.isShow=false;

            var arr1= JSON.parse(localStorage.getItem('sure2'));
            if(arr1){
                console.log(arr1);
                var number = 0;
                for(var k=0;k<arr1.length;k++){
                    //console.log(aaa.shopId);
                    //console.log(arr1[k].obj.shopId);
                    if(arr1[k].obj.shopId == aaa.shopId){
                        localStorage.setItem('sure2',JSON.stringify(arr1));
                        number=1
                        arr1[k].count++;
                        //console.log(aaa.shopId);
                        break;
                    }
                }
                if(number==0){
                    arr1.push({'count':1,'obj':aaa});
                    localStorage.setItem('sure2',JSON.stringify(arr1));
                }
            }else {
               // $scope.arrLocalstorage=JSON.parse(localStorage.getItem('sure2'));
                $scope.arrLocalstorage.push({'count':1,'obj':aaa});
                localStorage.setItem('sure2',JSON.stringify($scope.arrLocalstorage));
                console.log($scope.arrLocalstorage);
            }
        }
        
    }])


























































