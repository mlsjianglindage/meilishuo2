angular.module('adduseraddressModule', [])

.controller('adduseraddressCtrl', ['$scope', '$http', function($scope, $http) {
	

	//省级联动
	$scope.error = {};
	$scope.list = [];
	$http.get('resource/1.json').success(function(data) {
		$scope.list = data;
	});

	$scope.selected = '';
	$scope.visible = false;
	$scope.c = function() {
		$scope.visible2 = false;
		$scope.visible3 = false;
//		console.log($scope.selected.name);
		if($scope.selected==''){
			$scope.visible = false;
		}else{
			$scope.visible = true;
		}
	};
	
	
	$scope.c2 = function() {
		$scope.visible3 = false;
//		console.log($scope.selected2.name);
		$scope.visible2 = true;
	};
	
	
	$scope.c3 = function() {
//		console.log($scope.selected3.value);
		$scope.visible3 = true;
	};
//	localStorage.removeItem('addressDetail');
	
	//存值
	var id=0;
	$scope.saveInfo=function(n,p,sn,s2n,s3v,d,m){
		//取值
		$scope.arrArray=JSON.parse(localStorage.getItem('addressDetailInfos'));
		id++;console.log(id);

		if(!$scope.arrArray){
			$scope.arrArray=[];
		}
		//将值存入数组
		
		var objs={
			name:n,
			phone:p,
			province:sn,
			city:s2n,
			area:s3v,
			detail:d,
			mail:m,
			id:id
		}
		$scope.arrArray.push(objs);
		//存值
		localStorage.setItem('addressDetailInfos',JSON.stringify($scope.arrArray));
		console.log($scope.arrArray);
	}
	
	
}]);