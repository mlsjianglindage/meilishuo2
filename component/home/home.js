angular.module('HomeModule',[])
	.service('HomeService1',['$http',function ($http) {
		return $http.get('resource/home/header.json');
	}])
.controller('homeCtrl',['$scope','HomeService1',function($scope,HomeService1){
	HomeService1.success(function (res) {
		$scope.banner=[];
		$scope.banner=res.data[5956].list;
		console.log($scope.banner);
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

	})
}])