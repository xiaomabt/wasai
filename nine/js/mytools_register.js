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
		
		let idPass=[1,1,1,1];
		function poor(){
							var arr="";
							var x;
							while(true){
								x=parseInt(Math.random()*173);
								if(x>=97 && x<=122){
								arr+=String.fromCharCode(x);
								}
								if(x>=65 && x<=90){
								arr+=String.fromCharCode(x);
								}
								if(x>=0 && x<=9){
								arr+=x.toString();
								}
								if(arr.length>=4){
									break;
								}
							}
							 document.getElementById("box22").innerHTML=arr;
							 
							 
						}
		
		$('input')[1].onchange=function(){
			let xx=$('input')[1].value;
			let reg=/^[a-z0-9]+(\.[a-z0-9]+)*@([a-z0-9](-[a-z0-9])?)+(\.{1,2}[a-z]+)+$/;
			if(reg.test(xx)==false){
				$('.likeone')[0].innerHTML='这不是一个有效的电子邮箱';
				$('.likeone').css('color','#f00');
				idPass[0]=0;
			}else{
				$('.likeone')[0].innerHTML='OK!';
				$('.likeone').css('color','#f00');
				idPass[0]=2;
			}
		}
		$('input')[2].onchange=function(){
			let xx=$('input')[2].value;
			let reg=/^[\u2E80-\u9FFF]+$/;
			if(reg.test(xx)==false){
				$('.liketwo')[0].innerHTML='昵称仅支持汉字';
				$('.liketwo').css('color','#f00');
				idPass[1]=0;
			}else{
				$('.liketwo').css('color','#f00');
							$.ajax({
								type:"get",
								url:"../html/checkUser.php",
								async:true,
								data:"useName1="+this.value,
								success:function(num){
									if(num=="1"){
										$('.liketwo').html("该昵称已经被使用");	
									}else{
										$('.liketwo').html("OK!");	
									}
								}
							});
							idPass[1]=2;
			}
		}
		$('input')[3].onchange=function(){
			let xx=$('input')[3].value;
			let reg=/^\w{6,18}$/;
			if(reg.test(xx)==false){
				$('.likethree')[0].innerHTML='密码含非法字符';
				$('.likethree').css('color','#f00');
				idPass[2]=0;
			}else{
				$('.likethree')[0].innerHTML='OK!';
				$('.likethree').css('color','#f00');
				idPass[2]=2;
			}
		}
		$('input')[4].onchange=function(){
			let xx=$('input')[4].value;
			let reg=$('input')[3].value;
			if(reg!=xx){
				$('.likefour')[0].innerHTML='两次密码不一致';
				$('.likefour').css('color','#f00');
				idPass[3]=0;
			}else{
				$('.likefour')[0].innerHTML='OK!';
				$('.likefour').css('color','#f00');
				idPass[3]=2;
			}
		}
		$('form').submit(function(){
			for(let i=0;i<idPass.length;i++){
				if(idPass[i]!=2){
					alert("您的输入有误，请重新按提示输入!")
					return false;
				}
			}
			
		});
			
		
	});
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