angular.module('addAddressModule',[])
.controller('addAddressCtrl',['$scope','$http',function($scope,$http){
	$scope.objArr2=JSON.parse(localStorage.getItem('addressDetailInfo'));
	console.log($scope.objArr2);
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
		if($scope.selected==''){
			$scope.visible = false;
		}else{
			$scope.visible = true;
		}
	};
	$scope.c2 = function() {
		$scope.visible3 = false;
		$scope.visible2 = true;
	};
	
	
	$scope.c3 = function() {
		$scope.visible3 = true;
	};
	
	//删除
	$scope.dele_address=function(id){
		console.log(id);
		
	}
	
}])