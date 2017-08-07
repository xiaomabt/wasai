require(['jquery-1.8.3.min','move'], function(){
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
		
		window.onscroll = function(){ 
			//顶部隐藏
			let scrolltop=document.body.scrollTop + document.documentElement.scrollTop;
			if(scrolltop<100){
				$('.fix')[0].style.display="none";
				$('#topp').css("display","none")
			}
			if(scrolltop>=100){
				$('.fix')[0].style.display="block";
				$('#topp').css("display","block")
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
		for(let i=0;i<$('input').length;i++){
							$('input')[i].onfocus=function(){
								$('input')[i].style.border='2px solid #00cbcc';
							}
							$('input')[i].onblur=function(){
								$('input')[i].style.border='2px solid #ccc';
							}
						}
		//慢慢回到顶部
		$("#top").click(function(){
			//var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	      	//  console.log(scrollTop)
	        $("body").animate({scrollTop: '-0px'}, "slow");
		});
		//QQ
		$('.qqzx').mouseenter(function(){
			$('.qqzx').animate({'bottom':'220px'},'slow');
		});
		$('.qqzx').mouseleave(function(){
			$('.qqzx').animate({'bottom':'200px'},'slow');
		});
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
		
		
		//广告
		let arr=[0,1,1,1,1];
			
				$(".game1").mouseover(function(){
					let ord = $(".game1").index(this);
					if(arr[ord]==0){
						moveRight(ord);
					}else if(arr[ord]==1){
						moveLeft(ord);
					}
				});
				$('#shadiao').click(function(){
					$('#box0').css('display','none');
					$('#shadiao').css('display','none');
				})
				
			
			function moveRight(ord){
				$(".game0").stop(true);
				for(let i=ord+1;i<5;i++){
					$(".game0").eq(i).animate({"left":(976-(5-i)*85)+"px"},1000);	
					arr[i]=1;
				}
			}
				
			function moveLeft(ord){
				$(".game0").stop(true);
				for(let i=1;i<=ord;i++){
					$(".game0").eq(i).animate({"left":(i*85)+"px"},1000);
					arr[i]=0;	
				}
			}
			
	//轮播
	
	let imgs,spans,timer;
			//1,取得需要操作的元素
			let list = $q('list');
			imgs=list.getElementsByTagName("img");
			let prev = $q('prev');
			let next = $q('next');
			spans = $q('buttons').getElementsByTagName("span");
			let container = $q('container');
			let index=0;
			//2,左右事件绑定:
			prev.onclick=function(){
				index--;//计算索引位置
				if(index<0){index=5;}	
				changeImg(index);//	切换图片
			};
			next.onclick=function(){
				index++;//计算索引位置
				if(index>5){index=0;}		
				changeImg(index);//	切换图片
			};
			//给小圆点绑定单击事件
			for(let i=0;i<spans.length;i++){
				spans[i].onclick=function(){
					index=spans[i].getAttribute("index")-1;//取得小圆点代表的索引位置
					changeImg(index);//	切换图片	
				};
			}
			
			timer=setInterval(next.onclick,3000);
			container.onmouseover=function(){
				clearInterval(timer);
			};
			container.onmouseout=function(){
				//填坑！！！这个timer不赋值清不掉定时器
				timer=setInterval(next.onclick,3000);
			};
		
		function changeImg(index){
		//显示index的图片，隐藏其他图片
		for(let i=0;i<imgs.length;i++){
			if(i==index){
				move8(imgs[i],100);//调用淡入淡出运动函数
			}else{
				move8(imgs[i],0);			
			}
		}
		//4,取消所有小圆点的样式，设置索引为index的小圆点样式为on
		for(let i=0;i<spans.length;i++){
			if(i==index){
				spans[i].className="on";
			}else{
				spans[i].className="";
			}
		}
	}
	
});