/**
 * Created by YZTC on 2016/12/23.
 */
angular.module('youhuiModule',[])
    .controller('youhuiCtrl',['$scope',function($scope){
        $scope.changeColor1=true;
        $scope.changeStyle1=function(){
            $scope.changeColor1=true;
            $scope.changeColor2=false;
        }
        $scope.changeColor2=false;
        $scope.changeStyle2=function(){
            $scope.changeColor2=true;
            $scope.changeColor1=false;
        }
    }])