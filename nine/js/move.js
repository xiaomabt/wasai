	function $q(id){
		return document.getElementById(id);
	}
	function getStyle(obj,attrName){
		if(obj.currentStyle){
			return obj.currentStyle[attrName];
		}else{
			return window.getComputedStyle(obj,false)[attrName];
		}
	}
	function move8(obj,target){//运动对象和目标值
		clearInterval(obj.timer);//清除定时器
		obj.timer=setInterval(function(){//开启定时器
			let curt=getStyle(obj,"opacity")*100;//去的当前值
			let speed=(target-curt)/10;//计算速度
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);//速度取整
			if(target==curt){//判断目标是否达到
				clearInterval(obj.timer);//清除定时器
			}else{
				obj.style["opacity"]=(curt+speed)/100;//赋值
				obj.style["filter"]=`alpha(opacity:${curt+speed})`;
			}
		},30);
	}
	
	
	
	