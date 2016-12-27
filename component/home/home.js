angular.module('HomeModule',[])
    .service('HomeService1',['$http',function ($http) {
        return $http.get('resource/home/header.json');
    }])
    .service('HomeService2',['$http',function ($http) {
        return $http.get('resource/home/moren.json');
    }])
    .service('HomeService3',['$http',function ($http) {
        return $http.get('resource/home/zuixin.json');
    }])
    .service('HomeService4',['$http',function ($http) {
        return $http.get('resource/home/jingxuan.json');
    }])
    .controller('homeCtrl',['$scope','HomeService1','HomeService2','HomeService3','HomeService4',function($scope,HomeService1,HomeService2,HomeService3,HomeService4){
        HomeService1.success(function (res) {
            $scope.banner=[];
            $scope.banner=res.data[5956].list;
            mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                loop:true,
                autoplay:2000,
                pagination: '.swiper-pagination',
                autoplayDisableOnInteraction:false,
                paginationClickable: true,
                longSwipesRatio: 0.3,
                touchRatio:1,
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            })
            $scope.flag1=true;
            $scope.flag2=false;
            $scope.flag3=false;
         $scope.UL1=function () {
             $scope.flag1=true;
             $scope.flag2=false;
             $scope.flag3=false;
         }
            $scope.UL2=function () {
                $scope.flag1=false;
                $scope.flag2=true;
                $scope.flag3=false;
            }
            $scope.UL3=function () {
                $scope.flag1=false;
                $scope.flag2=false;
                $scope.flag3=true;
            }
        })
        HomeService2.success(function (res){
           $scope.arr2=res.data.list;
        })
        HomeService3.success(function (res){
            $scope.arr3=res.data.list;
        })
        HomeService4.success(function (res){
            $scope.arr4=res.data.list;
        })
    }])