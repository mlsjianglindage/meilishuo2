/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('addressModule',[])
    .controller('addressCtrl',['$scope',function($scope){
    	//取值
        $scope.objArr=JSON.parse(localStorage.getItem('addressDetailInfo'));
		console.log($scope.objArr);
    }])