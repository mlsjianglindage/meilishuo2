angular.module('buycarModule',[])
    .controller('buycarCtrl',['$scope',function($scope){
        $scope.arr=JSON.parse(localStorage.getItem('sure2'));

        //切换购物车信息,判断arr长度
        if($scope.arr.length>0){
            $scope.isShow=true;
        }else{
            $scope.isShow=false;
        }
        console.log($scope.arr);

        //计算商品价格
        $scope.totalArr = JSON.parse(localStorage.getItem('sure2'));
        totalPrice($scope.totalArr);
        function totalPrice(arr){
            $scope.total=0;
            for (var i = 0; i < arr.length; i++) {
                var str =arr[i].obj.price;
                //取到浮点型数值
                var num = parseFloat(str.substring(1));
                $scope.total += num*arr[i].count;
            }
            $scope.total = $scope.total.toFixed(2);
        }

        //减法
        $scope.isCount=false;
        $scope.subCount=function(i){
            $scope.arr[i].count--;
            //商品小于1时显示提示信息,数量为1
            if($scope.arr[i].count<=1){
                $scope.arr[i].count=1;
                $scope.isCount=true;
            }
            localStorage.setItem('sure2',JSON.stringify($scope.arr));
            $scope.arr=JSON.parse(localStorage.getItem('sure2'));

            for(var i=0;i<$scope.arr.length;i++){
                var str =$scope.arr[i].obj.price;
                var num = parseFloat(str.substring(1));

                $scope.total += num*$scope.arr[i].count;
                $scope.total = $scope.total.toFixed(2);
            }
            console.log( $scope.total);
        }

        //加法
        $scope.addCount=function(i){
            $scope.arr[i].count++;
            $scope.show=false;
            localStorage.setItem('sure2',JSON.stringify($scope.arr));
            $scope.arr=JSON.parse(localStorage.getItem('sure2'));

            for(var i=0;i<$scope.arr.length;i++){
                var str =$scope.arr[i].obj.price;
                var num = parseFloat(str.substring(1));
                $scope.total += num*$scope.arr[i].count;
                $scope.total = $scope.total.toFixed(2);
            }
            console.log( $scope.total);
        }

        ///删除商品
        $scope.isTrue=true;
        $scope.dele_goods=function(i){
            $scope.isTrue=false;
            if(confirm('确定要删除这件商品吗?')){
                $scope.arr.splice(i,1);
            }
            localStorage.setItem('sure2',JSON.stringify($scope.arr));
            $scope.arr=JSON.parse(localStorage.getItem('sure2'));

        }

        //全选(有问题)
        $scope.isAll=true;
        $scope.changeSelect=true;
        $scope.num=0;
        $scope.selectAll=function(){
            $scope.num++;
            $scope.isAll=true;
            if($scope.num%2==0){
                $scope.isAll=true;
                localStorage.setItem('sure2',JSON.stringify($scope.arr));
                $scope.arr=JSON.parse(localStorage.getItem('sure2'));
                totalPrice($scope.arr);
            }else{
                $scope.isAll=false;
                $scope.changeSelect=false;
                $scope.total =0;
            }
        }

        //勾选商品(效果有问题;价格没算)
        $scope.selectNum=0;
        $scope.select=function(obj,shopId){
            $scope.selectNum++;
            if($scope.selectNum % 2 == 0){
                this.changeSelect=true;
            }else{
                this.changeSelect=false;
            }
            $scope.isAll=false;
            console.log(obj);
        }

    }])
