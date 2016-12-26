var myApp = angular.module("myApp", ['ui.router','angularCSS','HomeModule','mrsxModule','pptmModule','gwzyModule','nzdpModule','yzlxModule','morenModule','zuixinModule','jingxuanModule','categoryModule','moreModule','buycarModule','mineModule','addressModule','scbbModule','shopModule','youhuiModule']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.when("", "/home");
	
	 $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "component/home/home.html",
            controller:'homeCtrl',
			css:'component/home/home.css'
        })
         .state("home.mrsx", {
             url:"/mrsx",
             templateUrl: "component/home/mrsx/mrsx.html",
             controller:'mrsxCtrl',
             css:'component/home/mrsx/mrsx.css'
         })
         .state("home.pptm", {
             url:"/pptm",
             templateUrl: "component/home/pptm/pptm.html",
             controller:'pptmCtrl',
             css:'component/home/pptm/pptm.css'
         })
         .state("home.gwzy", {
             url:"/gwzy",
             templateUrl: "component/home/gwzy/gwzy.html",
             controller:'gwzyCtrl',
             css:'component/home/gwzy/gwzy.css'
         })
         .state("home.nzdp", {
             url:"/nzdp",
             templateUrl: "component/home/nzdp/nzdp.html",
             controller:'nzdpCtrl',
             css:'component/home/nzdp/nzdp.css'
         })
         .state("home.yzlx", {
             url:"/yzlx",
             templateUrl: "component/home/yzlx/yzlx.html",
             controller:'yzlxCtrl',
             css:'component/home/yzlx/yzlx.css'
         })
         .state("home.moren", {
             url:"/moren",
             templateUrl: "component/home/moren/moren.html",
             controller:'morenCtrl',
             css:'component/home/moren/moren.css'
         })
         .state("home.zuixin", {
             url:"/zuixin",
             templateUrl: "component/home/zuixin/zuixin.html",
             controller:'zuixinCtrl',
             css:'component/home/zuixin/zuixin.css'
         })
         .state("home.jingxuan", {
             url:"/jingxuan",
             templateUrl: "component/home/jingxuan/jingxuan.html",
             controller:'jingxuanCtrl',
             css:'component/home/jingxuan/jingxuan.css'
         })
        .state("category", {
            url:"/category",
            templateUrl: "component/category/category.html",
            controller:'categoryCtrl',
            css:'component/category/category.css'
        })
        .state("category.more", {
            url:"/more",
            templateUrl: "component/category/more/more.html",
            controller:'moreCtrl',
            css:'component/category/more/more.css'
        })
         .state("category.search", {
             url:"/search",
             templateUrl: "component/category/search/search.html",
             controller:'searchCtrl',
             css:'component/category/search/search.css'
         })
        .state("buycar", {
            url: "/buycar",
            templateUrl: "component/buycar/buycar.html",
            controller:'buycarCtrl',
			css:'component/buycar/buycar.css'
        })
        
       .state("mine", {
            url: "/mine",
            templateUrl: "component/mine/mine.html",
            controller:'mineCtrl',
			css:'component/mine/mine.css'
        })
         .state("mine.address", {
             url: "/address",
             templateUrl: "component/mine/address/address.html",
             controller:'addressCtrl',
             css:'component/mine/address/address.css'
         })
         .state("mine.scbb", {
             url: "/scbb",
             templateUrl: "component/mine/scbb/scbb.html",
             controller:'scbbCtrl',
             css:'component/mine/scbb/scbb.css'
         })
         .state("mine.shop", {
             url: "/shop",
             templateUrl: "component/mine/shop/shop.html",
             controller:'shopCtrl',
             css:'component/mine/shop/shop.css'
         })
         .state("mine.youhui", {
             url: "/youhui",
             templateUrl: "component/mine/youhui/youhui.html",
             controller:'youhuiCtrl',
             css:'component/mine/youhui/youhui.css'
         })

});

myApp.controller('myCtrl',['$scope',function($scope){
    $scope.isActive1=true;
    $scope.changeStyle=function(){
        $scope.changesStyle=true;
        $scope.isActive1=true;
        $scope.changesStyle2=false;
        $scope.isActive2=false;
        $scope.changesStyle3=false;
        $scope.isActive3=false;
        $scope.changesStyle4=false;
        $scope.isActive4=false;
    }
    $scope.changeStyle2=function(){
        $scope.changesStyle2=true;
        $scope.isActive2=true;
        $scope.changesStyle=false;
        $scope.isActive1=false;
        $scope.changesStyle3=false;
        $scope.isActive3=false;
        $scope.changesStyle4=false;
        $scope.isActive4=false;
    }
    $scope.changeStyle3=function(){
        $scope.changesStyle3=true;
        $scope.isActive3=true;
        $scope.changesStyle=false;
        $scope.isActive1=false;
        $scope.changesStyle2=false;
        $scope.isActive2=false;
        $scope.changesStyle4=false;
        $scope.isActive4=false;
    }
    $scope.changeStyle4=function(){
        $scope.changesStyle4=true;
        $scope.isActive4=true;
        $scope.changesStyle=false;
        $scope.isActive1=false;
        $scope.changesStyle2=false;
        $scope.isActive2=false;
        $scope.changesStyle3=false;
        $scope.isActive3=false;
    }
}])