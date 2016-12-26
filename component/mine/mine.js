angular.module('mineModule',[])
	.controller('mineCtrl',['$scope',function($scope){

		$scope.changeThisStyle = function(v) {
			console.log('sss');
			var llis = document.getElementsByTagName("li");
			for(var i = 0; i < llis.length; i++) {
				var lli = llis[i];
				if(lli == document.getElementById("tab" + v)) {
					lli.style.color= "#FF7A9A";
				} else {
					lli.style.color = "#666";
				}
			}
			var divs = document.getElementsByClassName("tab_css");
			for(var i = 0; i < divs.length; i++) {
				var divV = divs[i];
				if(divV == document.getElementById("tab" + v + "_content")) {
					divV.style.display = "block";
				} else {
					divV.style.display = "none";
				}
			}
		}
	}])