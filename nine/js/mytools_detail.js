	$(function(){
		//UL二维码的出现消失
		$('.wowsai').mousemove(function(){
			$('.ewm').css('display','block');
		})
		$('.wowsai').mouseout(function(){
			$('.ewm').css('display','none');
		})
		//FIX二维码的出现消失
		$('#weixinma').mousemove(function(){
			$('#weixin2').css('display','block');
		})
		$('#weixinma').mouseout(function(){
			$('#weixin2').css('display','none');
		})
		//FIX二维码的出现消失
		/*$('#weixinma')[0].onmousemove=function(){
			$('#weixin2')[0].style.display="block";
		}
		$('#weixinma')[0].onmouseout=function(){
			$('#weixin2')[0].style.display="none";
		}*/
	
		/*<script>
	  var jq = $.noConflict(); 
				jq('#pppq').mouseenter(function(){
				
					jq("#qqqp").css("display","block");
				})
				jq('#qqqp').mouseenter(function(){
				
					jq("#qqqp").css("display","block");
				})
				jq('#pppq').mouseout(function(){
					jq('#qqqp')[0].style.display="none";
				})  
				jq('#qqqp').mouseout(function(){
					jq('#qqqp')[0].style.display="none";
				})  
			  
   </script>*/
		
		
		window.onscroll = function(){ 
			//顶部隐藏
			let scrolltop=document.body.scrollTop + document.documentElement.scrollTop;
			if(scrolltop<100){
				$('.fix')[0].style.display="none";
			}
			if(scrolltop>=100){
				$('.fix')[0].style.display="block";
			}
		}
		//二级菜单隐藏
		$('.dingzhiyuan')[0].onmousemove=function(){
			$('.dingzhi')[0].style.display="block";
		}
		$('.dingzhiyuan')[0].onmouseout=function(){
			$('.dingzhi')[0].style.display="none";
		}
		$('.dingzhi')[0].onmousemove=function(){
			$('.dingzhi')[0].style.display="block";
		}
		$('.dingzhi')[0].onmouseout=function(){
			$('.dingzhi')[0].style.display="none";
		}
		//input onfocus事件
		$('.search')[0].onfocus=function(){
			$('.search')[0].cssText="border:2px solid #00cbcc";
		}
		//慢慢回到顶部
		$("#top").click(function(){
			//var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	      	//  console.log(scrollTop)
	        $("body").animate({scrollTop: '0px'}, "slow");
		});
		
		
		
		//detail  input
		for(let i=0;i<$('input').length;i++){
			$('input')[i].onfocus=function(){
				$('input')[i].style.border='2px solid #00cbcc';
			}
			$('input')[i].onblur=function(){
				$('input')[i].style.border='2px solid #ccc';
			}
		}
		//侧边栏的显现隐藏
		$('#paihang_two').click(function(){
			$('.uncle').css('display','none');
			$('#paihang_two').css({'background':'#ededed',
								   'border-top':'2px solid #229ca0'
								});
			$('#paihang_one').css({'background':'#f5f5f1',
								   'border-top':'2px solid #f5f5f1'
								});
			})
			$('#paihang_one').click(function(){
				$('.uncle').css('display','block');
				$('#paihang_one').css({'background':'#ededed',
									   'border-top':'2px solid #229ca0'
									});
				$('#paihang_two').css({'background':'#f5f5f1',
									   'border-top':'2px solid #f5f5f1'
									});
		});
	
		//放大镜
		let tuWidth=420;
		let tuHeight=420;
		let yuanWidth=150;
		let yuanHeight=150;

		window.onload=function(){
		$(".hat1")[0].onmousemove=function(event){
		let e=event||window.event;
		let offsetleft=$(".hat1")[0].offsetLeft;
		let offsettop=$(".hat1")[0].offsetTop;
		let scrolltop=document.body.scrollTop||document.documentElement.scrollTop
		let top=e.clientY-offsettop-yuanHeight/2+scrolltop;
		let left=e.clientX-offsetleft-yuanWidth/2;
			if(top<0){
				top=0;
			}else if(top>tuHeight-yuanHeight){
				top=tuHeight-yuanHeight;
			}
			if(left<0){
				left=0;
			}else if(left>tuWidth-yuanWidth){
				left=tuWidth-yuanWidth;
			}
		$(".box11")[0].style.top=top+"px";
		$(".box11")[0].style.left=left+"px";

		$(".hat11")[0].style.top=-3*top+"px";
		$(".hat11")[0].style.left=-3*left+"px";

		$('.box22').css('display','block');
		$(".hat1")[0].onmouseout=function(){
			$('.box22').css('display','none');
		}
	}
}
							
	
	//轮播图，用的原生
	function $q(id){
		return document.getElementById(id);
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
	function getStyle(obj,attrName){
		if(obj.currentStyle){
			return obj.currentStyle[attrName];
		}else{
			return window.getComputedStyle(obj,false)[attrName];
		}
	}
	
	
	
	
	/*for(let i=0;i<$('.detail_01').length;i++){
		$('.detail_01').css({'background':'#f6f6f6',
					   		 'height':'36px'
								});
			
		$('.detail_01')[i].onclick=function(){
			this.style.background="#fff";
			this.style.height="37px";
			//this.style.cssText="background:#fff; height:37px;";?????
			
		}
	}					
		$('.detail_01').click(function(){
			$('.control').css('display','block')
			$('.detail_01').css({'color':'#3e3e3e',
								'background':'#fff',
					   			'height':'37px'
								});
		})*/
	//加减商品数
	$('.chimaa').click(function(){
		let num=$('.chima_01').html();
		if(num==1){
			$('.chima_01').html(1);
		}else{
			$('.chima_01').html(num-1);
		}
	})
	$('.chima_a').click(function(){
		let num=parseInt($('.chima_01').html());
		$('.chima_01').html(num+1);
	})
	//地址显现隐藏
	$('#beijing').click(function(){
		$('#beijing_1').css({'display':'block',
							 'height':'195px'
		})
		
	})
	$('#beijing_2').click(function(){
		$('#beijing_1').animate({'height':'0px'},'slow',function(){
			$('#beijing_1').css('display','none');
		});
	})
	$('#beijing_3').children().click(function(){
		$('#beijingg').html($(this).html());
	})
	//选择加样式
	/*$('.chima').click(function(){
		toogle();
	})*/
	
	var strStoreDate = window.localStorage? localStorage.getItem("name"): Cookie.read("name");
		
		if(strStoreDate==null){
			$('#loadi').css('display','none');
		}else{
			$('#load_ing').css('display','none');
			$('#loadin').html(strStoreDate);
		}
		$('#top_99').click(function(){
			var storage=window.localStorage;
	            storage.a=1;
	            storage.setItem("name",3);
	            storage.clear();
	            location=location ;
		})
	
	//完结
	});
	
	//选项卡
	function xuanze(date){
		let arr=$('.pin_jia').children();
		for(var i=0;i<arr.length;i++){
			arr[i].className="";
		}
			arr[date-1].className="detail_01";
		let arr1=$('.nima').children();
		for(var i in arr1){
			arr1[i].className="haha";
		}
			arr1[date-1].className="";
	}
	/*function toogle(){
		$('.chima').toggle('slow',function(){
			$('.chima').css('background','red')
		})
	}*/