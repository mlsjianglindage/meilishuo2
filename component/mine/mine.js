angular.module('mineModule',[])
.controller('mineCtrl',['$scope','$window',function($scope,$window){

	//切换样式
	$scope.changeThisStyle = function(v) { 
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

//固定导航 (事件触发不了)
   .directive('scrollBox',function(){
    	return {
    		restrict:'A',
    		replace:true,
    		scope:{}, // -> 独立作用域
    		link:function(scope,element,attrs){
    			var domOffsetTop = element[0].offsetTop; // 元素到顶部的距离
    			var scrollTop = 0;  // 定义滚动条高度初始值
    			window.onscroll = function(){
    				scrollTop = document.documentElement.scrollTop || document.body.scrollTop ; 
    				if( scrollTop >= domOffsetTop){ 	//当滚动条高度大于等于DOM节点到document顶部的距离 
    					element.addClass('fixednav');	
    				}else{		
    					element.removeClass('fixednav');
    				}
    				console.log('滚动条高度：'+scrollTop,'DOM节点高度：'+domOffsetTop);
    			}
    		}
    	}
    })


