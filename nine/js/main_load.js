require(['cookieTools','jquery-1.8.3.min'],function(cookieTools){
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
	        $("body").animate({scrollTop: '0px'}, "slow");
		});
		//cookie???
		let str = unescape(document.cookie);
		let str2=str.split("; ")
		let str3=str2[0];
		let str1=str3.split("=");
		$('#namer').val(str1[0]);
		$('#passer').val(str1[1]);
		
		$('#namer').blur(function(){
			let xx=cookieTools.getCookieValue($('#namer').val());
			$('#passer').val(xx);
		})
		for(let i=0;i<$('input').length;i++){
							$('input')[i].onfocus=function(){
								$('input')[i].style.border='2px solid #00cbcc';
							}
							$('input')[i].onblur=function(){
								$('input')[i].style.border='2px solid #ccc';
							}
						}
						
						$('#but').click(function(){
							$.ajax({
								type:"get",
								url:"check.php",
								async:true,
								data:"userName="+$('#namer').val()+"&userPass="+$("#passer").val(),
								success:function(num){
									if(num=="1"){
										cookieTools.addCookie($('#namer').val(),$('#passer').val(),7,"/")
										localStorage.setItem("name",$('#namer').val());
										location.href="../index.html";	
									}else{
										$('#tishi').html("用户名或密码错误");
										$('#tishi').css('color','red');
									}
								}
							});
						})
						
		
	});
	