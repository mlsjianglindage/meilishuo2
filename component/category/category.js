angular.module('categoryModule',[])
	.service('dataCategory',['$http',function($http){
		return $http.get('resource/category/1.json');
	}])
	.service('dataCategory1',['$http',function($http){
		return $http.get('resource/category/2.json');
	}])
	.service('dataCategory2',['$http',function($http){
		return $http.get('resource/category/3.json');
	}])
	.controller('categoryCtrl',['$scope','dataCategory','dataCategory1','dataCategory2',function($scope,dataCategory,dataCategory1,dataCategory2){
		dataCategory.success(function(res){
			$scope.arr = res.data[15325].list;
			$scope.arr1 = res.data[17118].list;
			// console.log(res.data);
		})
		dataCategory1.success(function(res){
			$scope.arr2 = res.data[17124].list;
			$scope.arr3 = res.data[17126].list;
			$scope.arr4 = res.data[17127].list;
			$scope.arr5 = res.data[17128].list;
			$scope.arr6 = res.data[17129].list;
			// console.log(res.data[17124].list);
		})
		dataCategory2.success(function(res){
			$scope.arr7 = res.data[17130].list;
			// console.log(res.data);
		})
	}])