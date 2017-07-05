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
		//倒计时
		time();
		setInterval(time,1000);
		
		
		
		
	});
	function $q(id){
		return document.getElementById(id);
	}
	function time(){
			let date1=new Date();
			let date2=new Date("2017-9-1");
			let time1=date1.getTime();
			let time2=date2.getTime();
			let time3=time2-time1;
			let day=Math.floor(time3/1000/60/60/24);
			let hour=Math.floor(time3/1000/60/60%24);
			let fen=Math.floor(time3/1000/60%60);
			let miao=Math.floor(time3/1000%60);
			let str=day+"天"+hour+"时"+fen+"分"+miao+"秒";
			$('.ziti').html(str);
		}